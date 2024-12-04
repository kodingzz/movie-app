import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { API_KEY, BASE_URL } from "./Home";

export default function MovieDetails() {
  const [details, setDetails] = useState<MovieDetailsProps>(Object);
  const id = useParams().movieId;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
        );
        if (!response.ok) throw new Error("fetch Error!");
        const datas = await response.json();
        setDetails(datas);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex justify-center   p-10 gap-32">
      <div>
        <img
          className="rounded-xl hover:translate-y-[-20px] transition all duration-500 ease-linear border"
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title}
        />
      </div>

      <div>
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="text-[40px] hover:text-rose-500 transition all duration-200">
            <a href={details.homepage}>{details.title}</a>
          </h1>
          <span>원제 : {details.title}</span>
          <span>개봉 일자 : {details.release_date}</span>
          <span>
            상영 시간 : {Math.floor(details.runtime / 60)}h{" "}
            {details.runtime % 60}m
          </span>
          <span>
            상영 언어 :{" "}
            {details.spoken_languages?.[0]?.english_name || "정보 없음"}
          </span>
          <span>
            장르 : {details.genres?.map((genre) => genre.name).join(" • ")}{" "}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-[30px]  ">
            <FontAwesomeIcon icon={faStar} className="mr-4 text-yellow-400" />
            <span>{details.vote_average?.toFixed(1)}</span> / 10
          </div>
          <div className="text-[30px]">
            <FontAwesomeIcon icon={faHeart} className="mr-4 text-red-500" />
            <span>{details.vote_count}</span>
          </div>
        </div>

        <div className="w-full sm:w-96 text-[20px] mt-5">
          <span>{details.overview}</span>
        </div>
      </div>
    </div>
  );
}

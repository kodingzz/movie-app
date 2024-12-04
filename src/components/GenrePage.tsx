import { useEffect, useState } from "react";
import Movie from "./Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "./Home";
import { genres } from "../genres.json";

export default function GenrePage() {
  const genreName = useParams().genre;

  const genreId = genres.filter((genre) => genre.name === genreName)[0].id;

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  console.log(page);

  const handlePrevPage = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  const handleNextPage = () =>
    setPage((prevPage) => (prevPage < pageCount ? prevPage + 1 : prevPage));

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=${page}`
        );
        if (!response.ok) throw new Error("fetch Error!");
        const datas = await response.json();
        setLoading(false);
        setMovies(datas.results);
        setPageCount(datas.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [genreName, page]); // genre와 page를 의존성 배열에 추가

  return loading ? (
    <div className="text-red-500 flex justify-center items-center text-[30px] min-h-screen ">
      loading...
    </div>
  ) : (
    <>
      <div className="flex items-center justify-between h-24  p-8 h">
        <div>
          <span className="text-[25px] text-rose-500">{genreName}</span>
        </div>
        <div className="flex justify-center items-center gap-4 mx-auto">
          <button onClick={handlePrevPage}>
            <FontAwesomeIcon className="p-2" icon={faChevronLeft} />
          </button>
          <span className="text-xl">{page > 0 && page}</span>
          <button onClick={handleNextPage}>
            <FontAwesomeIcon className="p-2" icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className=" p-7 grid grid-cols-5 gap-y-10 gap-x-5">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

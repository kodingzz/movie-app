import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center  justify-between py-4 gap-8 w-full mb-4 px-4">
      <div className="flex justify-center items-center gap-8">
        <Link to="/" className="text-[30px] h-10 leading-10">
          혀누티비
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li className="group  relative">
              분류기준
              <ul className="absolute  list-hover">
                <li className=" listItem-hover">
                  <Link to="/popular" className="block w-full h-full">
                    인기 영화
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/playing" className="block w-full h-full">
                    최신 영화
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/trendingDay" className="block w-full h-full">
                    일별 트렌드 영화
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/trendingWeek" className="block w-full h-full">
                    주별 트렌드 영화
                  </Link>
                </li>
              </ul>
            </li>

            <li className="group  relative">
              장르별
              <ul className=" absolute list-hover">
                <li className="listItem-hover">
                  <Link to="/genres/Romance" className=" block w-full h-full">
                    로맨스
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Comedy" className="block w-full h-full">
                    코미디
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Thriller" className="block w-full h-full">
                    스릴러
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link
                    to="/genres/Documentary"
                    className="block w-full h-full"
                  >
                    다큐
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Music" className="block w-full h-full">
                    뮤직
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Action" className="block w-full h-full">
                    엑션
                  </Link>
                </li>
                <li className="listItem-hover">
                  <Link to="/genres/Horror" className="block w-full h-full">
                    호러
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <ul className="flex gap-4 justify-center items-center">
          <li>
            <a href="#" className="h-10">
              검색
            </a>
          </li>
          <li>
            <Link to="/login" className="h-10">
              내 프로필
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

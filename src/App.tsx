import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import YearPage from "./components/YearPage";
import GenrePage from "./components/GenrePage";
import PlayingMoviePage from "./components/PlayingMoviePage";
import PopularMoviePage from "./components/PopularMoviePage";
import TrendingDayMoviePage from "./components/TrendingDayMoviePage";
import TrendingWeekMoviePage from "./components/TrendingWeekMoviePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App seoul-hangang">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playing" element={<PlayingMoviePage />} />
            <Route path="/popular" element={<PopularMoviePage />} />
            <Route path="/year" element={<YearPage />} />
            <Route path="/trendingDay" element={<TrendingDayMoviePage />} />
            <Route path="/trendingWeek" element={<TrendingWeekMoviePage />} />

            <Route path="/genres/:genre" element={<GenrePage />} />

            <Route path="/movie/:movieId" element={<MovieDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

interface MovieProps {
  title: string;
  release_date: string;
  genres: string[];
  vote_average: number;
  id: number;
  backdrop_path: string;
  poster_path: string;
}
interface MovieDetailsProps {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  popularity: number;
  runtime: number;
  backdrop_path: string;
  poster_path: string;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  genres: { id: string; name: string }[];
  budget: number;
  revenue: number;
  vote_average: number;
  vote_count: number;
  homepage: string;
}

import { useSelector } from "react-redux";
import { RootState } from "../../../app";
import {
  MoviesWithGenresLabel,
  GetMoviesState,
} from "../../../shared/type/type";

export const useMovies = () => {
  const { movies, genres, loading } = useSelector<RootState>(
    (state) => state.movies
  ) as GetMoviesState;
  if (loading) {
    return { loading, movies: [] };
  } else {
    const genreMap = genres.reduce((acc: Record<string, string>, genre) => {
      acc[genre.value] = genre.label;
      return acc;
    }, {});

    const updatedMovies: MoviesWithGenresLabel[] = movies.map(
      ({ genre_ids, ...updatedMovie }) => {
        const genres_label = genre_ids.map(
          (id) => genreMap[id] || "Unknown Genre"
        );
        return {
          ...updatedMovie,
          genres_label,
        };
      }
    );
    return { loading, movies: updatedMovies };
  }
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getMovies } from "../../../root";
import { filters } from "../../../shared/constants/filters";
import {
  GetMoviesState,
  MoviesWithGenresLabel,
} from "../../../shared/type/type";

export const useMoviesWithPagination = () => {
  const { movies, genres, loading } = useSelector<RootState>(
    (state) => state.movies
  ) as GetMoviesState;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies(filters));
  }, [dispatch]);

  if (loading) {
    return { loading, movies: [] };
  }
  if (movies.length > 0) {
    const ratedMovies: MoviesWithGenresLabel[] = JSON.parse(
      localStorage.getItem("rated-movies") ?? "[]"
    );

    const genreMap = genres.reduce((acc: Record<string, string>, genre) => {
      acc[genre.value] = genre.label;
      return acc;
    }, {});

    const ratingMap = ratedMovies.reduce(
      (acc: Record<number, number>, movie) => {
        acc[movie.id] = movie.rating;
        return acc;
      },
      {}
    );

    const updatedMovies: MoviesWithGenresLabel[] = movies.map(
      ({ genre_ids, id, ...updatedMovie }) => {
        const genres_label = genre_ids.map(
          (id) => genreMap[id] || "Unknown Genre"
        );
        const rating = ratingMap[id] ?? null;
        return {
          ...updatedMovie,
          id,
          genres_label,
          rating,
        };
      }
    );

    return { loading, movies: updatedMovies };
  }

  return { loading, movies: [] };
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getMovies } from "../../../app";
import { MoviesList } from "../../../features/movies-list";
import { Pagination } from "../../../features/pagination";
import { filters } from "../../../shared/constants/filters";
import { GetMoviesState } from "../../../shared/type/type";

export const MoviesWithPagination = () => {
  const { movies, loading } = useSelector<RootState>(
    (state) => state.movies
  ) as GetMoviesState;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies(filters));
  }, [dispatch]);

  return (
    <>
      <MoviesList />
      {movies.length > 0 && !loading && <Pagination />}
    </>
  );
};

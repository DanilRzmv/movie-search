import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MoviesList } from "../../../features/movies-list";
import { AppDispatch, getMovies } from "../../../app";
import { Pagination } from "../../../features/pagination";
import { filters } from "../../../shared/constants/filters";

export const MoviesWithPagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies(filters));
  }, [dispatch]);

  return (
    <>
      <MoviesList />
      <Pagination />
    </>
  );
};

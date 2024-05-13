import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getMovies, setPage } from "../../../app";
import { PaginationUI } from "../../../entities/pagination";
import { getMoviesState } from "../../../shared/type/type";

export const Pagination = () => {
  const {
    filters: { page },
    total_pages,
  } = useSelector<RootState>((state) => state.movies) as getMoviesState;
  const dispatch = useDispatch<AppDispatch>();
  const [paginationPage, setPaginationPage] = useState<number | null>(null);

  useEffect(() => {
    if (paginationPage) {
      dispatch(setPage(paginationPage));
      dispatch(getMovies(paginationPage));
    }
  }, [paginationPage, dispatch]);
  return (
    <PaginationUI
      value={page}
      onChange={setPaginationPage}
      position="flex-end"
      total_pages={total_pages}
    />
  );
};

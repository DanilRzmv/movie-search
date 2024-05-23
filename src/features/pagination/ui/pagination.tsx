import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getMovies, setPage } from "../../../root";
import { PaginationUI } from "../../../entities/pagination";
import { GetMoviesState } from "../../../shared/type/type";

export const Pagination = () => {
  const {
    filters: { page },
    total_pages,
  } = useSelector<RootState>((state) => state.movies) as GetMoviesState;
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
      activePage={page}
      onChange={setPaginationPage}
      position="flex-end"
      total_pages={total_pages}
    />
  );
};

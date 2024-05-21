import { useEffect, useState } from "react";
import { Group, Stack } from "@mantine/core";
import { CardMovie } from "../../../features/card-movie";
import { PaginationUI } from "../../../entities/pagination";
import {
  GetMoviesState,
  MoviesWithGenresLabel,
} from "../../../shared/type/type";
import { chunk } from "../utils/chunk-data";
import { useSelector } from "react-redux";
import { RootState } from "../../../root";

export const RatedMoviesWithPagination = () => {
  const { reRenderId, searchRatedMovie } = useSelector<RootState>(
    (state) => state.movies
  ) as GetMoviesState;
  const [activePage, setPage] = useState(1);
  const [ratedMovies, setRatedMovies] = useState<MoviesWithGenresLabel[]>([]);

  useEffect(() => {
    const ratedMovies = JSON.parse(
      localStorage.getItem("rated-movies") ?? "[]"
    );
    setRatedMovies(ratedMovies);
  }, [reRenderId]);

  useEffect(() => {
    setPage(1);
  }, [searchRatedMovie]);

  const filteredMovies = ratedMovies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchRatedMovie.toLowerCase())
  );

  const paginatedData = chunk(filteredMovies, 4);

  const movies = paginatedData[activePage - 1]?.map((movie) => (
    <CardMovie key={movie.id} movie={movie} />
  ));

  return (
    <Stack gap={24} mt={40} pb={82}>
      <Group justify="center">{movies}</Group>
      <PaginationUI
        total_pages={paginatedData.length}
        value={activePage}
        onChange={setPage}
        position="center"
      />
    </Stack>
  );
};

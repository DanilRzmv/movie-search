import { useEffect, useState } from "react";
import { Group, Stack } from "@mantine/core";
import { CardMovie } from "../../../entities/card-movie";
import { PaginationUI } from "../../../entities/pagination";
import { MoviesWithGenresLabel } from "../../../shared/type/type";
import { chunk } from "../utils/chunk-data";

export const RatedMoviesWithPagination = () => {
  const [activePage, setPage] = useState(1);
  const [ratedMovies, setRatedMovies] = useState<MoviesWithGenresLabel[]>([]);

  useEffect(() => {
    const ratedMovies = JSON.parse(
      localStorage.getItem("rated-movies") ?? "[]"
    );
    setRatedMovies(ratedMovies);
  }, []);

  const paginatedData = chunk(ratedMovies, 4);

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

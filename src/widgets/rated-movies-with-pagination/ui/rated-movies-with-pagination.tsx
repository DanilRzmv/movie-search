import { FC, useEffect, useState } from "react";
import { Group, Stack } from "@mantine/core";
import { CardMovie } from "../../../features/card-movie";
import { PaginationUI } from "../../../entities/pagination";
import { EmptyMovies } from "../../../shared/ui/empty-movies/empty-movies";
import { chunk } from "../utils/chunk-data";
import { MoviesWithGenresLabel } from "../../../shared/type/type";

interface RatedMoviesWithPaginationProps {
  searchRatedMovie: string;
  ratedMovies: MoviesWithGenresLabel[];
}

export const RatedMoviesWithPagination: FC<RatedMoviesWithPaginationProps> = ({
  searchRatedMovie,
  ratedMovies,
}) => {
  const [activePage, setPage] = useState(1);

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

  const RatedMoviesWithPaginationRender = movies ? (
    <Stack gap={24} mt={40} pb={82}>
      <Group justify="center">{movies}</Group>
      <PaginationUI
        total_pages={paginatedData.length}
        activePage={activePage}
        onChange={setPage}
        position="center"
      />
    </Stack>
  ) : (
    <EmptyMovies />
  );

  return RatedMoviesWithPaginationRender;
};

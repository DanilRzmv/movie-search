import { Group, Loader } from "@mantine/core";
import { useMoviesWithPagination } from "../hooks/useMoviesWithPagination";
import { Pagination } from "../../../features/pagination";
import { CardMovie } from "../../../features/card-movie";
import { EmptyMovies } from "../../../shared/ui/empty-movies/empty-movies";
import { MoviesWithGenresLabel } from "../../../shared/type/type";

export const MoviesWithPagination = () => {
  const { loading, movies } = useMoviesWithPagination();

  const movieList = loading ? (
    <Loader color="purple.5" />
  ) : movies.length ? (
    movies.map((movie: MoviesWithGenresLabel) => (
      <CardMovie key={movie.id} movie={movie} />
    ))
  ) : (
    <EmptyMovies />
  );

  return (
    <>
      <Group justify="center">{movieList}</Group>
      {movies.length > 0 && !loading && <Pagination />}
    </>
  );
};

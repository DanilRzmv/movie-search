import { Group, Loader } from "@mantine/core";
import { useMovies } from "../hooks/useMovies";
import { CardMovie } from "../../../entities/card-movie";
import { MoviesWithGenresLabel } from "../../../shared/type/type";
import { EmptyMovies } from "../../../shared/ui/empty-movies/empty-movies";

export const MoviesList = () => {
  const { loading, movies } = useMovies();

  const movieList = loading ? (
    <Loader color="purple.5" />
  ) : movies.length ? (
    movies.map((movie: MoviesWithGenresLabel) => (
      <CardMovie key={movie.id} movie={movie} />
    ))
  ) : (
    <EmptyMovies />
  );

  return <Group justify="center">{movieList}</Group>;
};

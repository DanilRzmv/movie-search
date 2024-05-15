import { Group, Loader } from "@mantine/core";
import { MoviesWithGenresLabel } from "../../../shared/type/type";
import { CardMovie } from "../../../entities/card-movie";
import { useMovies } from "../hooks/useMovies";
import { EmptyMovies } from "../../../shared/ui/empty-movies/empty-movies";
import { CardMovieNew } from "../../../entities/card-movie/ui/card-movie-new";

export const MoviesList = () => {
  const { loading, movies } = useMovies();

  const movieList = loading ? (
    <Loader color="purple.5" />
  ) : movies.length ? (
    movies.map((movie: MoviesWithGenresLabel) => (
      // <CardMovie key={movie.id} movie={movie} />
      <CardMovieNew
        key={movie.id}
        movie={movie}
        widthImage={119}
        heightImage={170}
        maxWidthMainConteiner={482}
        maxWidthSubContainer={398}
        maxWidthContent={263}
      />
    ))
  ) : (
    <EmptyMovies />
  );

  return <Group justify="center">{movieList}</Group>;
};

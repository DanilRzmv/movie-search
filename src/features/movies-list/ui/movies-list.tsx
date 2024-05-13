import { useSelector } from "react-redux";
import { Group } from "@mantine/core";
import { RootState } from "../../../app";
import {
  MoviesWithGenresLabel,
  getMoviesState,
} from "../../../shared/type/type";
import { CardMovie } from "../../../entities/card-movie";

export const MoviesList = () => {
  const { movies, genres } = useSelector<RootState>(
    (state) => state.movies
  ) as getMoviesState;

  const genreMap = genres.reduce((acc: Record<string, string>, genre) => {
    acc[genre.value] = genre.label;
    return acc;
  }, {});

  const updatedMovies: MoviesWithGenresLabel[] = movies.map((movie) => {
    const genres_label = movie.genre_ids.map(
      (id) => genreMap[id] || "Unknown Genre"
    );
    return {
      ...movie,
      genres_label,
    };
  });

  return (
    <Group>
      {updatedMovies.map((movie: MoviesWithGenresLabel) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </Group>
  );
};

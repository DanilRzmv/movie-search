import { MoviesWithGenresLabel } from "../../../shared/type/type";

export const removeRatedMovie = (movieId: number) => {
  try {
    const ratedMovies = JSON.parse(
      localStorage.getItem("rated-movies") ?? "[]"
    );

    const updatedRatedMovieList = ratedMovies.filter(
      (ratedMovie: MoviesWithGenresLabel) => ratedMovie.id !== movieId
    );

    localStorage.setItem("rated-movies", JSON.stringify(updatedRatedMovieList));
  } catch (error) {
    console.error(error);
  }
};

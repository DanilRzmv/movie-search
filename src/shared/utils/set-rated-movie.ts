import { MoviesWithGenresLabel } from "../type/type";

export const setRatedMovie = (movie: MoviesWithGenresLabel, rating: number) => {
  try {
    const movieWithRating = { ...movie, rating };
    const ratedMovies = JSON.parse(
      localStorage.getItem("rated-movies") ?? "[]"
    );
    const movieIndex = ratedMovies.findIndex(
      (ratedMovie: MoviesWithGenresLabel) => ratedMovie.id === movie.id
    );

    let updatedRatedMovieList;
    if (movieIndex !== -1) {
      updatedRatedMovieList = [
        ...ratedMovies.slice(0, movieIndex),
        movieWithRating,
        ...ratedMovies.slice(movieIndex + 1),
      ];
    } else {
      updatedRatedMovieList = [...ratedMovies, movieWithRating];
    }

    localStorage.setItem("rated-movies", JSON.stringify(updatedRatedMovieList));
  } catch (error) {
    console.error(error);
  }
};

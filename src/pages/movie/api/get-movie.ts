import { movieDetailDefault } from "./../../../shared/constants/movie-detail";
import { Method } from "../../../shared/constants/http-method";
import { MovieDetail, Video } from "../../../shared/type/type";

export const getMovie = async (movieId: string) => {
  try {
    const options = {
      method: Method.GET,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=en-US`,
      options
    );
    const data = await response.json();

    const trailers = data.videos.results.filter(
      (video: Video) => video.type === "Trailer" && video.official
    );
    const earliestTrailer = trailers.reduce(
      (
        earliest: { published_at: string | number | Date },
        current: { published_at: string | number | Date }
      ) => {
        const earliestDate = new Date(earliest.published_at);
        const currentDate = new Date(current.published_at);
        return currentDate < earliestDate ? current : earliest;
      }
    );

    const movie: MovieDetail = {
      id: data.id,
      original_title: data.original_title,
      poster_path: data.poster_path,
      release_date: data.release_date,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
      runtime: data.runtime,
      budget: data.budget,
      revenue: data.revenue,
      genres: data.genres,
      overview: data.overview,
      production_companie: data.production_companies,
      trailer: earliestTrailer,
    };
    return movie;
  } catch (error) {
    console.error(error);
    return { ...movieDetailDefault };
  }
};

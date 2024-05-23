import type { NextApiRequest, NextApiResponse } from "next";
import { Method } from "../../src/shared/constants/http-method";
import { filterSchema } from "../../src/shared/schema/filter-schema";
import {
  Movie,
  MoviesAndTotalPages,
  ResponseMessage,
} from "../../src/shared/type/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseMessage | MoviesAndTotalPages>
) {
  try {
    if (req.method !== Method.GET) {
      throw Error();
    }

    const validate = filterSchema.safeParse(req.query);

    if (!validate.success) {
      const { errors } = validate.error;

      return res.status(400).json({
        message: "Invalid request",
        errors,
        movies: [],
        total_pages: 0,
      });
    }

    const {
      with_genres,
      primary_release_year,
      vote_averageLte,
      vote_averageGte,
      sort_by,
      page,
    } = req.query;

    const options = {
      method: Method.GET,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=${primary_release_year}&sort_by=${sort_by}&vote_average.gte=${vote_averageGte}&vote_average.lte=${vote_averageLte}&with_genres=${with_genres}`,
      options
    );
    const data = await response.json();

    const total_pages = Math.min(data.total_pages, 500);

    const movies = data.results.map((movie: Movie) => {
      return {
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        genre_ids: movie.genre_ids,
      };
    });
    res.status(200).json({ movies, total_pages });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "something wrong!", movies: [], total_pages: 0 });
  }
}

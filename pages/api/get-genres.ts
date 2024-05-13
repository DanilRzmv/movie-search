import type { NextApiRequest, NextApiResponse } from "next";
import { Method } from "../../src/shared/constants/http-method";

type Genre = {
  id: number;
  name: string;
};

type ResponseData = {
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | Genre[]>
) {
  try {
    if (req.method === Method.GET) {
      const options = {
        method: Method.GET,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      );
      const data = await response.json();

      const genres = data.genres.map((genre: Genre) => {
        return {
          value: `${genre.id}`,
          label: genre.name,
        };
      });
      res.status(200).json(genres);
    } else {
      throw Error();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "something wrong!" });
  }
}

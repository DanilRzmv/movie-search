import { GetServerSideProps } from "next";
import { MoviePage } from "../../src/pages/movie";
import { getMovie } from "../../src/pages/movie/api/get-movie";
import { MovieDetail } from "../../src/shared/type/type";

interface ResponseMovie {
  movie: MovieDetail;
}

export const getServerSideProps = (async ({ query }) => {
  const movieId = query?.movieId;
  if (typeof movieId === "string") {
    const movie = await getMovie(movieId);
    if (!movie) {
      return {
        notFound: true,
      };
    }
    return { props: { movie } };
  } else {
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<ResponseMovie>;

export default MoviePage;

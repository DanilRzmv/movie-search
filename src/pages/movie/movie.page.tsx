import Link from "next/link";
import { InferGetServerSidePropsType } from "next";
import { Anchor, Breadcrumbs, Stack } from "@mantine/core";
import { getServerSideProps } from "../../../pages/movies/[movieId]";
import { MovieDetail } from "../../widgets/movie-detail";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { Genre, MoviesWithGenresLabel } from "../../shared/type/type";
import { CardMovieBig } from "../../entities/card-movie-big";

export const MoviePage = ({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const ratedMovies: MoviesWithGenresLabel[] = JSON.parse(
    localStorage.getItem("rated-movies") ?? "[]"
  );

  const ratingMap = ratedMovies.reduce((acc: Record<number, number>, movie) => {
    acc[movie.id] = movie.rating;
    return acc;
  }, {});

  const cardMovie = {
    id: movie.id,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    genres_label: movie.genres.map((genre: Genre) => genre.name),
    runtime: movie.runtime,
    budget: movie.budget,
    revenue: movie.revenue,
    rating: ratingMap[movie.id] ?? null,
  };

  return (
    <MainContainer size="smm">
      <Stack gap={20}>
        <Breadcrumbs>
          <Anchor size="sm" c="purple.5" href="/" component={Link}>
            Movies
          </Anchor>
          <Anchor size="sm" c="purple.5">
            {movie.original_title}
          </Anchor>
        </Breadcrumbs>
        <CardMovieBig movie={cardMovie} />
        <MovieDetail
          keyYouTube={movie.trailer.key}
          title={movie.trailer.name}
          overview={movie.overview}
          production_companie={movie.production_companie}
        />
      </Stack>
    </MainContainer>
  );
};

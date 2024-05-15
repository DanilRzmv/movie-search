import Link from "next/link";
import { InferGetServerSidePropsType } from "next";
import { Anchor, Breadcrumbs, Stack } from "@mantine/core";
import { getServerSideProps } from "../../../pages/movies/[movieId]";
import { MovieDetail } from "../../widgets/movie-detail";
import { CardMovieNew } from "../../entities/card-movie/ui/card-movie-new";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { Genre } from "../../shared/type/type";

export const MoviePage = ({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const cardMovie = {
    id: movie.id,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    genres_label: movie.genres.map((genre: Genre) => genre.name),
  };

  const infoForBigCard = {
    release_date: movie.release_date,
    runtime: movie.runtime,
    budget: movie.budget,
    revenue: movie.revenue,
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
        <CardMovieNew
          movie={cardMovie}
          infoForBigCard={infoForBigCard}
          widthImage={250}
          heightImage={352}
          maxWidthMainConteiner={800}
          maxWidthSubContainer={708}
          maxWidthContent={442}
        />
        <MovieDetail
          keyYouTube={movie.trailer?.key}
          title={movie.trailer?.name}
          overview={movie.overview}
          production_companie={movie.production_companie}
        />
      </Stack>
    </MainContainer>
  );
};

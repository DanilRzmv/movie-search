import { Rating, Text, Image as ImageMantine, Flex } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";
import classes from "../styles/card-movie.module.css";
import { MoviesWithGenresLabel } from "../../../shared/type/type";
import { formatVote } from "../../../shared/utils/format-vote";
import NoPoster from "../../../../public/no-poster.jpg";

interface CardMovieProps {
  movie: MoviesWithGenresLabel;
}

export const CardMovie: FC<CardMovieProps> = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    genres_label,
  } = movie;

  const release_year = new Date(release_date).toLocaleDateString(undefined, {
    year: "numeric",
  });

  const posterExist = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : NoPoster;

  return (
    <Flex className={classes.card} justify="space-between">
      <Flex wrap="wrap" justify="space-between" maw={398} w="100%">
        <ImageMantine
          src={posterExist}
          w={119}
          h={170}
          width={119}
          height={170}
          flex="none"
          component={Image}
          fallbackSrc="/no-poster.png"
          alt="poster"
        />
        <Flex direction="column" justify="space-between" maw={263} w="100%">
          <Flex direction="column" align="flex-start">
            <Text fw={600} size="xl" lineClamp={2} c="purple.5">
              {original_title}
            </Text>
            <Text size="md" c="gray.5">
              {release_year}
            </Text>
            <Flex align="center" gap={8}>
              <Rating size={"lg"} count={1} value={1} />
              <Text fw={600} size="md">
                {vote_average.toFixed(1)}
              </Text>
              <Text size="md" c="gray.5">
                ({formatVote(vote_count)})
              </Text>
            </Flex>
          </Flex>
          <Flex gap={8}>
            <Text size="md" c="gray.5">
              Genres
            </Text>
            <Text size="md" truncate="end">
              {genres_label.join(", ")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Rating count={1} size={"lg"} color="purple.5" />
    </Flex>
  );
};

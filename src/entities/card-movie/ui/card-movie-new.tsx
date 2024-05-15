import {
  Rating,
  Text,
  Image as ImageMantine,
  Flex,
  Stack,
} from "@mantine/core";
import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import classes from "../styles/card-movie.module.css";
import {
  InfoForBigCard,
  MoviesWithGenresLabel,
} from "../../../shared/type/type";
import { formatVote } from "../../../shared/utils/format-vote";

interface CardMovieProps {
  movie: MoviesWithGenresLabel;
  infoForBigCard?: InfoForBigCard;
  widthImage: number;
  heightImage: number;
  maxWidthSubContainer: number;
  maxWidthMainConteiner: number;
  maxWidthContent: number;
}

export const CardMovieNew: FC<CardMovieProps> = ({
  movie,
  infoForBigCard,
  widthImage,
  heightImage,
  maxWidthMainConteiner,
  maxWidthSubContainer,
  maxWidthContent,
}) => {
  const router = useRouter();
  const {
    id,
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

  const additionalInfo = infoForBigCard
    ? [
        { id: 0, label: "Duration", value: infoForBigCard?.runtime },
        { id: 1, label: "Premiere", value: infoForBigCard?.release_date },
        { id: 2, label: "Budget", value: infoForBigCard?.budget },
        { id: 3, label: "Gross worldwide", value: infoForBigCard?.revenue },
      ]
    : [];

  const renderAdditionalInfo =
    additionalInfo.length > 0 &&
    additionalInfo.map(({ label, value, id }) => (
      <Flex key={id} gap={8}>
        <Text size="md" c="gray.5">
          {label}
        </Text>
        <Text size="md" lineClamp={1}>
          {value}
        </Text>
      </Flex>
    ));

  return (
    <Flex
      className={classes.card}
      justify="space-between"
      maw={maxWidthMainConteiner}
    >
      <Flex
        wrap="wrap"
        justify="space-between"
        maw={maxWidthSubContainer}
        w="100%"
        onClick={() => router.push(`/movies/${id}`)}
      >
        <ImageMantine
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          w={widthImage}
          h={heightImage}
          width={widthImage}
          height={heightImage}
          flex="none"
          component={Image}
          fallbackSrc="/no-poster.png"
          alt="poster"
        />
        <Flex
          direction="column"
          justify="space-between"
          maw={maxWidthContent}
          w="100%"
          gap={8}
        >
          <Flex direction="column" align="flex-start" gap={8}>
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
          <Stack gap={12}>
            {renderAdditionalInfo}
            <Flex gap={8}>
              <Text size="md" c="gray.5">
                Genres
              </Text>
              <Text size="md" lineClamp={1}>
                {genres_label.join(", ")}
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Rating count={1} size={"lg"} color="purple.5" />
    </Flex>
  );
};

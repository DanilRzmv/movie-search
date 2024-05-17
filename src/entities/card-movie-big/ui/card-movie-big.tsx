import { FC } from "react";
import Image from "next/image";
import {
  Rating,
  Text,
  Image as ImageMantine,
  Flex,
  Stack,
} from "@mantine/core";
import classes from "../styles/card-movie-big.module.css";
import { formatVote } from "../../../shared/utils/format-vote";
import { CardBig } from "../../../shared/type/type";
import { formatDate, formatYear } from "../../../shared/utils/format-date";
import { formatTime } from "../../../shared/utils/format-duration";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { useResponsiveSizeCard } from "../hooks/useResponsiveSizeCard";

interface CardMovieProps {
  movie: CardBig;
}

export const CardMovieBig: FC<CardMovieProps> = ({ movie }) => {
  const { additionalInfoSize, imageSize } = useResponsiveSizeCard();
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    genres_label,
    budget,
    revenue,
    runtime,
  } = movie;

  const additionalInfo = [
    { id: 0, label: "Duration", value: formatTime(runtime) },
    { id: 1, label: "Premiere", value: formatDate(release_date) },
    { id: 2, label: "Budget", value: formatCurrency(budget) },
    { id: 3, label: "Gross worldwide", value: formatCurrency(revenue) },
    { id: 4, label: "Genres", value: genres_label.join(", ") },
  ];

  const renderAdditionalInfo = additionalInfo.map(({ label, value, id }) => (
    <Flex key={id} gap={8}>
      <Text size="md" c="gray.5" w={additionalInfoSize.w}>
        {label}
      </Text>
      <Text size="md">{value}</Text>
    </Flex>
  ));

  return (
    <Flex className={classes.card} justify="space-between" maw={800}>
      <Flex wrap="wrap" justify="space-between" maw={708} w="100%">
        <ImageMantine
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          w={imageSize.w}
          h={imageSize.h}
          width={imageSize.w}
          height={imageSize.h}
          flex="none"
          component={Image}
          fallbackSrc="/no-poster.png"
          alt="poster"
        />
        <Flex
          direction="column"
          justify="space-between"
          maw={442}
          w="100%"
          gap={8}
        >
          <Flex direction="column" align="flex-start" gap={8}>
            <Text fw={600} size="xl" lineClamp={2} c="purple.5">
              {original_title}
            </Text>
            <Text size="md" c="gray.5">
              {formatYear(release_date)}
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
          <Stack gap={12}>{renderAdditionalInfo}</Stack>
        </Flex>
      </Flex>
      <Rating count={1} size={"lg"} color="purple.5" />
    </Flex>
  );
};

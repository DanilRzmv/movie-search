import { FC } from "react";
import Image from "next/image";
import {
  Rating,
  Text,
  Image as ImageMantine,
  Flex,
  Stack,
  Loader,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useRatingModal } from "../hooks/useRatingModal";
import { ModalUI } from "../../../shared/ui/modal/modal";
import { formatYear } from "../../../shared/utils/format-date";
import { formatVote } from "../../../shared/utils/format-vote";
import { CardBig, MoviesWithGenresLabel } from "../../../shared/type/type";
import classes from "../styles/card.module.css";

interface ImageSize {
  w: number;
  h: number;
}

interface AdditionalInfo {
  id: number;
  label: string;
  value: string;
}

interface MaxWidth {
  maxWidthMainContainer: number;
  maxWidthSubContainer: number;
  maxWidthContent: number;
}

interface CardProps {
  movie: MoviesWithGenresLabel | CardBig;
  matches?: boolean;
  imageSize: ImageSize;
  additionalInfo: AdditionalInfo[];
  additionalInfoSize?: { w: number };
  onCardClick?: () => void;
  maxWidth: MaxWidth;
  lineClamp?: number;
  cursor?: string;
}

export const Card: FC<CardProps> = ({
  movie,
  matches,
  imageSize,
  additionalInfo,
  additionalInfoSize,
  maxWidth,
  lineClamp,
  cursor = "default",
  onCardClick,
}) => {
  const {
    id,
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    rating,
  } = movie;
  const {
    isZeroRating,
    opened,
    isRating,
    handlePointerUp,
    onSave,
    onRemove,
    close,
  } = useRatingModal(movie, id, rating);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const renderAdditionalInfo =
    additionalInfo &&
    additionalInfo.map(({ label, value, id }) => (
      <Flex key={id} gap={8}>
        <Text size="md" c="gray.5" w={additionalInfoSize?.w}>
          {label}
        </Text>
        <Text size="md" lineClamp={lineClamp}>
          {value}
        </Text>
      </Flex>
    ));

  const renderImage = inView ? (
    <ImageMantine
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      w={imageSize.w}
      h={imageSize.h}
      width={imageSize.w}
      height={imageSize.h}
      flex="none"
      component={Image}
      fallbackSrc="/no-poster.jpg"
      alt="poster"
    />
  ) : (
    <Flex
      align="center"
      justify="center"
      w={imageSize.w}
      h={imageSize.h}
      bg="gray.2"
    >
      <Loader color="purple.5" />
    </Flex>
  );

  return (
    <>
      <ModalUI
        opened={opened}
        close={close}
        original_title={original_title}
        onSave={onSave}
        onRemove={onRemove}
      />
      <Flex
        ref={ref}
        className={classes.card}
        justify="space-between"
        maw={maxWidth.maxWidthMainContainer}
      >
        <Flex
          style={{ cursor }}
          wrap={matches ? "wrap" : "nowrap"}
          justify="space-between"
          gap="md"
          maw={maxWidth.maxWidthSubContainer}
          w="100%"
          onClick={onCardClick}
        >
          {renderImage}
          <Flex
            direction="column"
            justify="space-between"
            maw={maxWidth.maxWidthContent}
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
                <Rating size="lg" count={1} value={1} />
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
        <Rating
          count={1}
          size="lg"
          color="purple.5"
          onPointerUp={handlePointerUp}
          value={isZeroRating}
        />
        {isRating !== null && (
          <Text fw={600} ml={4}>
            {isRating}
          </Text>
        )}
      </Flex>
    </>
  );
};

import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Rating,
  Text,
  Image as ImageMantine,
  Flex,
  Stack,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/card-movie.module.css";
import { MoviesWithGenresLabel } from "../../../shared/type/type";
import { formatVote } from "../../../shared/utils/format-vote";
import { formatYear } from "../../../shared/utils/format-date";

interface CardMovieProps {
  movie: MoviesWithGenresLabel;
}

export const CardMovie: FC<CardMovieProps> = ({ movie }) => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const {
    id,
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    genres_label,
  } = movie;

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>
      <Flex className={classes.card} justify="space-between" maw={482}>
        <Flex
          wrap="wrap"
          justify="space-between"
          maw={398}
          w="100%"
          onClick={() => router.push(`/movies/${id}`)}
        >
          <ImageMantine
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            w={119}
            h={170}
            width={119}
            height={170}
            flex="none"
            component={Image}
            fallbackSrc="/no-poster.png"
            alt="poster"
          />
          <Flex
            direction="column"
            justify="space-between"
            maw={263}
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
            <Stack gap={12}>
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
        <Rating count={1} size={"lg"} color="purple.5" onClick={open} />
      </Flex>
    </>
  );
};

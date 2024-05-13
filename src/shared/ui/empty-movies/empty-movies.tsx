import { Stack, Text } from "@mantine/core";
import Image from "next/image";
import EmptyMoviesSvg from "../../../../public/empty-movies.svg";

export const EmptyMovies = () => {
  return (
    <Stack gap="md" align="center">
      <Image src={EmptyMoviesSvg} alt="empty movies" />
      <Text fw={600} size="xl">
        We don&apos;t have such movies, look for another one
      </Text>
    </Stack>
  );
};

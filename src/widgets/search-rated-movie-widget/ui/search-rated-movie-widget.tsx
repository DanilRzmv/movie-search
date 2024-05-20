import { Group } from "@mantine/core";
import { SearchRatedMovie } from "../../../features/search-rated-movie";
import { MainTitle } from "../../../shared/ui/main-title/main-title";

export const SearchRatedMovieWidget = () => {
  return (
    <Group justify="space-between">
      <MainTitle>Rated movies</MainTitle>
      <SearchRatedMovie />
    </Group>
  );
};

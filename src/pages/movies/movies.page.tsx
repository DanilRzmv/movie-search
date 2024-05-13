import { Stack } from "@mantine/core";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { MainTitle } from "../../shared/ui/main-title/main-title";
import { FiltersSection } from "../../widgets/filters";
import { MoviesWithPagination } from "../../widgets/movies-with-pagination";

export const MoviesPage = () => {
  return (
    <MainContainer size="mdd">
      <MainTitle>Movies</MainTitle>
      <Stack gap={24} mt={40} pb={82}>
        <FiltersSection />
        <MoviesWithPagination />
      </Stack>
    </MainContainer>
  );
};

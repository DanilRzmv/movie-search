import { MainContainer } from "../../shared/ui/main-container/main-container";
import { MainTitle } from "../../shared/ui/main-title/main-title";
import { RatedMoviesWithPagination } from "../../widgets/rated-movies-with-pagination";

export const RatedMoviesPage = () => {
  return (
    <MainContainer size="mdd">
      <MainTitle>Rated movies</MainTitle>
      <RatedMoviesWithPagination />
    </MainContainer>
  );
};

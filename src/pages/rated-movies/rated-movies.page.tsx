import { SearchRatedMovieWidget } from "../../widgets/search-rated-movie-widget";
import { RatedMoviesWithPagination } from "../../widgets/rated-movies-with-pagination";
import { MainContainer } from "../../shared/ui/main-container/main-container";

export const RatedMoviesPage = () => {
  return (
    <MainContainer size="mdd">
      <SearchRatedMovieWidget />
      <RatedMoviesWithPagination />
    </MainContainer>
  );
};

import { useState } from "react";
import { SearchRatedMovieWidget } from "../../widgets/search-rated-movie-widget";
import { RatedMoviesWithPagination } from "../../widgets/rated-movies-with-pagination";
import { NotFound } from "../../entities/not-found";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import NotFoundRatedMovies from "../../../public/not-found-rated-movies.svg";

export const RatedMoviesPage = () => {
  const [existRatedMovie, setExistRatedMovie] = useState(0);

  const ratedMovies =
    existRatedMovie > 0 ? (
      <MainContainer size="mdd">
        <SearchRatedMovieWidget />
        <RatedMoviesWithPagination setExistRatedMovie={setExistRatedMovie} />
      </MainContainer>
    ) : (
      <NotFound
        image={NotFoundRatedMovies}
        text="You haven't rated any films yet"
        imageMargin={16}
        textMargin={16}
        btnWidth={122}
        btnHeight={40}
        btnText="Find movies"
      />
    );

  return ratedMovies;
};

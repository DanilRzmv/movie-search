import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, resetFilters } from "../../root";
import { SearchRatedMovieWidget } from "../../widgets/search-rated-movie-widget";
import { RatedMoviesWithPagination } from "../../widgets/rated-movies-with-pagination";
import { NotFound } from "../../entities/not-found";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { filters } from "../../shared/constants/filters";
import { GetMoviesState, MoviesWithGenresLabel } from "../../shared/type/type";
import NotFoundRatedMovies from "../../../public/not-found-rated-movies.svg";

export const RatedMoviesPage = () => {
  const { reRenderId, searchRatedMovie } = useSelector<RootState>(
    (state) => state.movies
  ) as GetMoviesState;
  const dispatch = useDispatch<AppDispatch>();
  const [ratedMovies, setRatedMovies] = useState<MoviesWithGenresLabel[]>([]);

  useEffect(() => {
    dispatch(resetFilters(filters));
  }, [dispatch]);

  useEffect(() => {
    const ratedMovies = JSON.parse(
      localStorage.getItem("rated-movies") ?? "[]"
    );
    setRatedMovies(ratedMovies);
  }, [reRenderId]);

  const ratedMoviesRender =
    ratedMovies.length > 0 ? (
      <MainContainer size="mdd">
        <SearchRatedMovieWidget />
        <RatedMoviesWithPagination
          searchRatedMovie={searchRatedMovie}
          ratedMovies={ratedMovies}
        />
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

  return ratedMoviesRender;
};

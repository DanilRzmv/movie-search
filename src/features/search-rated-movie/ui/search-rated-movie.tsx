import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, setSearchRatedMovie } from "../../../app";
import { SearchRatedMovieUI } from "../../../entities/search-rated-movie-ui";

export const SearchRatedMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    dispatch(setSearchRatedMovie(searchMovie));
  }, [dispatch, searchMovie]);

  return <SearchRatedMovieUI setSearch={setSearchMovie} search={searchMovie} />;
};

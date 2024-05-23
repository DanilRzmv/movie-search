import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, setSearchRatedMovie } from "../../../root";
import { SearchRatedMovieUI } from "../../../entities/search-rated-movie-ui";

export const SearchRatedMovie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchMovie, setSearchMovie] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchMovie(value);
  };

  const startSearchRatedMovie = () => {
    dispatch(setSearchRatedMovie(searchMovie));
  };

  useEffect(() => {
    if (searchMovie.trim() === "") {
      dispatch(setSearchRatedMovie(searchMovie));
    }
  }, [dispatch, searchMovie]);

  return (
    <SearchRatedMovieUI
      handleChange={handleChange}
      search={searchMovie}
      onClick={() => startSearchRatedMovie()}
    />
  );
};

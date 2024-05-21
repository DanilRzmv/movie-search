export { App } from "./app";
export { type AppDispatch, type RootState } from "./store/store";
export {
  setFilters,
  setGenres,
  setPage,
  getMovies,
  resetFilters,
  setLoading,
  reRenderListRatedMovie,
  setSearchRatedMovie,
} from "./store/movies/movies-slice";

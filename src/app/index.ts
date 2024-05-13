export { App } from "./app";
export { type AppDispatch, type RootState } from "./store/store";
export {
  setFilters,
  setGenres,
  setPage,
  getMovies,
  resetFilters,
} from "./store/movies/movies-slice";

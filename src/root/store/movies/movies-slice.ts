import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  Filters,
  MoviesAndTotalPages,
  SelectDataType,
  GetMoviesState,
} from "../../../shared/type/type";
import { filters } from "../../../shared/constants/filters";

const initialState: GetMoviesState = {
  filters: { ...filters },
  genres: [],
  movies: [],
  total_pages: 1,
  loading: true,
  reRenderId: 0,
  searchRatedMovie: "",
};

const getMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
    setGenres(state, action: PayloadAction<SelectDataType[]>) {
      state.genres = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.filters.page = action.payload;
    },
    resetFilters(state, action) {
      state.filters = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    reRenderListRatedMovie(state, action) {
      state.reRenderId = action.payload;
    },
    setSearchRatedMovie(state, action) {
      state.searchRatedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      const { movies, total_pages } = action.payload;
      state.movies = movies;
      state.total_pages = total_pages;
      state.loading = false;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.movies = [];
    });
  },
});

export const getMovies = createAsyncThunk<
  MoviesAndTotalPages,
  Filters | number,
  { state: RootState }
>("movies/getMovies", async (args, thunkAPI) => {
  const state = thunkAPI.getState();
  let movieFilters = filters;
  if (typeof args === "number") {
    movieFilters = { ...state.movies.filters, page: args };
  } else {
    movieFilters = { ...args };
  }
  const {
    with_genres,
    primary_release_year,
    vote_averageLte,
    vote_averageGte,
    sort_by,
    page,
  } = movieFilters;

  const genres =
    with_genres.length > 1 ? with_genres.join(",") : with_genres[0] ?? "";

  const response = await fetch(
    `/api/get-movies?with_genres=${genres}&primary_release_year=${primary_release_year}&vote_averageLte=${vote_averageLte}&vote_averageGte=${vote_averageGte}&sort_by=${sort_by}&page=${page}`
  );
  const data = await response.json();

  return data;
});

export const {
  setGenres,
  setPage,
  setFilters,
  resetFilters,
  setLoading,
  reRenderListRatedMovie,
  setSearchRatedMovie,
} = getMoviesSlice.actions;

export default getMoviesSlice.reducer;

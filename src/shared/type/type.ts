export interface Filters {
  with_genres: string[];
  primary_release_year: string;
  vote_averageLte: string;
  vote_averageGte: string;
  sort_by: string;
  page: number;
}

export interface getMoviesState {
  filters: Filters;
  genres: SelectDataType[];
  movies: Movie[];
  total_pages: number;
}

export interface SelectDataType {
  value: string;
  label: string;
}

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[] | string[];
}

export interface MoviesWithGenresLabel extends Movie {
  genres_label: string[];
}

export interface MoviesAndTotalPages {
  movies: Movie[];
  total_pages: number;
}

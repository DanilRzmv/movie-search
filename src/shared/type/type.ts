export interface Filters {
  with_genres: string[];
  primary_release_year: string;
  vote_averageLte: string;
  vote_averageGte: string;
  sort_by: string;
  page: number;
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

export interface ProductionCompanie {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export type Genre = {
  id: number;
  name: string;
};

export interface MovieDetail extends Omit<Movie, "genre_ids"> {
  genres: Genre[];
  runtime: number;
  budget: number;
  revenue: number;
  overview: string;
  production_companie: ProductionCompanie[];
  trailer: Video;
}

export interface MoviesWithGenresLabel extends Omit<Movie, "genre_ids"> {
  genres_label: string[];
  rating: number;
}

export interface CardBig extends MoviesWithGenresLabel {
  runtime: number;
  budget: number;
  revenue: number;
}

export interface MoviesAndTotalPages {
  movies: Movie[];
  total_pages: number;
}

export interface GetMoviesState {
  filters: Filters;
  genres: SelectDataType[];
  movies: Movie[];
  total_pages: number;
  loading: boolean;
}

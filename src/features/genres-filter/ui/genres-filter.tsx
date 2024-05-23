import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../api/get-genres";
import { GetMoviesState } from "../../../shared/type/type";
import { MultiSelectFilter } from "../../../entities/select-filter";
import { AppDispatch, RootState, setGenres } from "../../../root";

export const GenresFilter = ({ ...props }) => {
  const {
    genres,
    filters: { with_genres },
  } = useSelector<RootState>((state) => state.movies) as GetMoviesState;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      if (!genres.length) {
        const genres = await getGenres();
        dispatch(setGenres(genres));
      }
    })();
  }, [dispatch, genres]);

  return (
    <MultiSelectFilter
      label="Genres"
      placeholder="Select genre"
      data={genres}
      needPlaceholder={with_genres.length}
      {...props}
    />
  );
};

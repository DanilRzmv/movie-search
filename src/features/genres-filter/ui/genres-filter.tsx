import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../api/get-genres";
import { SelectDataType } from "../../../shared/type/type";
import { MultiSelectFilter } from "../../../entities/select-filter";
import { AppDispatch, RootState, setGenres } from "../../../app";

export const GenresFilter = ({ ...props }) => {
  const genresExist = useSelector<RootState>(
    (state) => state.movies.genres
  ) as SelectDataType[];
  const dispatch = useDispatch<AppDispatch>();
  const [valueInput, setValueInput] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      if (!genresExist.length) {
        const genres = await getGenres();
        dispatch(setGenres(genres));
      }
    })();
  }, [dispatch, genresExist]);

  return (
    <MultiSelectFilter
      label="Genres"
      placeholder="Select genre"
      data={genresExist}
      valueInput={valueInput}
      {...props}
    />
  );
};

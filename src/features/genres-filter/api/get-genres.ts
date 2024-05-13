import { SelectDataType } from "../../../shared/type/type";

export const getGenres = async () => {
  try {
    const response = await fetch("/api/get-genres");
    const genres: SelectDataType[] = await response.json();
    return genres;
  } catch (error) {
    console.error(error);
    return [];
  }
};

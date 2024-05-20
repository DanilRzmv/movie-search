import { Dispatch, FC, SetStateAction } from "react";
import { Input } from "@mantine/core";
import { SearchBtn } from "./search-btn";
import { SearchIcon } from "./search-icon";
import classes from "../styles/search.module.css";

interface SearchRatedMovieUIProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}

export const SearchRatedMovieUI: FC<SearchRatedMovieUIProps> = ({
  search,
  setSearch,
}) => {
  return (
    <Input
      classNames={classes}
      placeholder="Search movie title"
      maw={490}
      w="100%"
      radius="md"
      rightSectionWidth={88}
      rightSectionPointerEvents="all"
      rightSection={<SearchBtn />}
      leftSection={<SearchIcon />}
      onChange={(event) => setSearch(event.target.value)}
      value={search}
    />
  );
};

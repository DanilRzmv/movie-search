import { ButtonHTMLAttributes, ChangeEvent, FC } from "react";
import { Input } from "@mantine/core";
import { SearchIcon } from "./search-icon";
import { ButtonUi } from "../../../shared/ui/button-ui/button-ui";
import classes from "../styles/search.module.css";

interface SearchRatedMovieUIProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

export const SearchRatedMovieUI: FC<SearchRatedMovieUIProps> = ({
  search,
  handleChange,
  ...props
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
      rightSection={<ButtonUi text="Search" w={88} h={32} {...props} />}
      leftSection={<SearchIcon />}
      onChange={handleChange}
      value={search}
    />
  );
};

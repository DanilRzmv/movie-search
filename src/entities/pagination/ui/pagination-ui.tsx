import { Dispatch, FC, SetStateAction } from "react";
import { Pagination } from "@mantine/core";
import classes from "../styles/pagination.module.css";

interface PaginationUIProps {
  onChange: Dispatch<SetStateAction<number | null>>;
  value: number;
  position: string;
  total_pages: number;
}

export const PaginationUI: FC<PaginationUIProps> = ({
  onChange,
  value,
  position,
  total_pages,
}) => {
  return (
    <Pagination
      styles={{ root: { alignSelf: position } }}
      classNames={classes}
      total={total_pages}
      boundaries={0}
      color="purple.5"
      onChange={onChange}
      value={value}
    />
  );
};

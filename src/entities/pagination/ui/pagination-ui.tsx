import { Dispatch, FC, SetStateAction } from "react";
import { Pagination } from "@mantine/core";
import classes from "../styles/pagination.module.css";

interface PaginationUIProps {
  onChange:
    | Dispatch<SetStateAction<number | null>>
    | Dispatch<SetStateAction<number>>;
  activePage: number;
  position: string;
  total_pages: number;
}

export const PaginationUI: FC<PaginationUIProps> = ({
  onChange,
  activePage,
  position,
  total_pages,
}) => {
  const getItemProps = (page: number) => {
    let startPage = Math.max(1, activePage - 1);
    let endPage = Math.min(total_pages, activePage + 1);

    if (activePage === 1) {
      endPage = Math.min(total_pages, 3);
    }

    if (activePage === total_pages) {
      startPage = Math.max(1, total_pages - 2);
    }

    if (page < startPage || page > endPage) {
      return { style: { display: "none" } };
    }

    return {};
  };

  return (
    <Pagination
      styles={{ root: { alignSelf: position } }}
      classNames={classes}
      total={total_pages}
      getItemProps={getItemProps}
      color="purple.5"
      onChange={onChange}
      value={activePage}
    />
  );
};

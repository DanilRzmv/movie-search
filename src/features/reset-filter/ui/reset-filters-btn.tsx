import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mantine/core";
import { AppDispatch, resetFilters } from "../../../app";
import classes from "../styles/reset-filters-btn.module.css";
import { Reset } from "@mantine/form/lib/types";
import { filters } from "../../../shared/constants/filters";

interface ResetFiltersBtnProps {
  reset: Reset;
  isResetValues: boolean;
}

export const ResetFiltersBtn: FC<ResetFiltersBtnProps> = ({
  reset,
  isResetValues,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      classNames={classes}
      variant="transparent"
      onClick={() => {
        dispatch(resetFilters(filters));
        reset();
      }}
      disabled={isResetValues}
    >
      Reset filters
    </Button>
  );
};

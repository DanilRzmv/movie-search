import { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mantine/core";
import { AppDispatch, resetFilters } from "../../../root";
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

  const handleReset = () => {
    dispatch(resetFilters(filters));
    reset();
  };

  return (
    <Button
      classNames={classes}
      variant="transparent"
      mt={31}
      onClick={() => handleReset()}
      disabled={isResetValues}
    >
      Reset filters
    </Button>
  );
};

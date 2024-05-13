import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "@mantine/form";
import { Flex } from "@mantine/core";
import { AppDispatch, getMovies, setFilters } from "../../../app";
import { GenresFilter } from "../../../features/genres-filter";
import { YearFilter } from "../../../features/year-filter";
import { RatingFilter } from "../../../features/rating-filter";
import { ResetFiltersBtn } from "../../../features/reset-filter";
import { SortByFilter } from "../../../features/sort-by-filter";
import { filters } from "../../../shared/constants/filters";
import { CheckResetForm } from "../utils/check-reset-form";

export const FiltersSection: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isResetValues, setIsResetValues] = useState(true);

  const { getInputProps, key, reset } = useForm({
    mode: "uncontrolled",
    initialValues: { ...filters },
    onValuesChange: (values) => {
      setIsResetValues(CheckResetForm(filters, values));
      dispatch(setFilters({ ...values }));
      dispatch(getMovies(values));
    },
  });

  const ratingFrom = {
    key: key("vote_averageGte"),
    getInputProps: getInputProps("vote_averageGte"),
  };
  const ratingTo = {
    key: key("vote_averageLte"),
    getInputProps: getInputProps("vote_averageLte"),
  };

  return (
    <form>
      <Flex wrap="wrap" justify="space-between" rowGap={24}>
        <GenresFilter
          key={key("with_genres")}
          {...getInputProps("with_genres")}
        />
        <YearFilter
          key={key("primary_release_year")}
          {...getInputProps("primary_release_year")}
        />
        <RatingFilter ratingFrom={ratingFrom} ratingTo={ratingTo} />
        <ResetFiltersBtn reset={reset} isResetValues={isResetValues} />
        <SortByFilter key={key("sort_by")} {...getInputProps("sort_by")} />
      </Flex>
    </form>
  );
};

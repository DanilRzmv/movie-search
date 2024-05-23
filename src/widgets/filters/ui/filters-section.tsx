import { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { Flex } from "@mantine/core";
import { AppDispatch, getMovies, setFilters } from "../../../root";
import debounce from "debounce";
import { GenresFilter } from "../../../features/genres-filter";
import { YearFilter } from "../../../features/year-filter";
import { RatingFilter } from "../../../features/rating-filter";
import { ResetFiltersBtn } from "../../../features/reset-filter";
import { SortByFilter } from "../../../features/sort-by-filter";
import { filters } from "../../../shared/constants/filters";
import { CheckResetForm } from "../utils/check-reset-form";

const schema = z
  .object({
    with_genres: z.string().array(),
    primary_release_year: z.coerce.number(),
    sort_by: z.string(),
    vote_averageGte: z.coerce.number().max(10),
    vote_averageLte: z.coerce.number().max(10),
  })
  .refine(
    ({ vote_averageGte, vote_averageLte }) =>
      vote_averageGte <= vote_averageLte,
    {
      message: "'from' cannot be greater than 'to'",
      path: ["vote_averageGte"],
    }
  );

export const FiltersSection: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isResetValues, setIsResetValues] = useState(true);

  const debouncedGetMovies = useRef(
    debounce((values) => {
      dispatch(getMovies(values));
    }, 1000)
  );

  const { getInputProps, key, reset, onSubmit } = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: { ...filters },
    onValuesChange: (values) => {
      onSubmit(() => {
        setIsResetValues(CheckResetForm(filters, values));
        dispatch(setFilters({ ...values }));
        debouncedGetMovies.current(values);
      })();
    },
    validate: zodResolver(schema),
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
      <Flex wrap="wrap" justify="space-between" rowGap={24} mb={24}>
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
      </Flex>
      <SortByFilter key={key("sort_by")} {...getInputProps("sort_by")} />
    </form>
  );
};

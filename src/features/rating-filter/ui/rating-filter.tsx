import { FC } from "react";
import { InputRating } from "../../../entities/input-rating";
import classes from "../styles/rating-filter.module.css";
import { GetInputPropsReturnType } from "@mantine/form/lib/types";

interface propsForm {
  key: string;
  getInputProps: GetInputPropsReturnType;
}

interface RatingFilter {
  ratingFrom: propsForm;
  ratingTo: propsForm;
}

export const RatingFilter: FC<RatingFilter> = ({ ratingFrom, ratingTo }) => {
  return (
    <div className={classes.rating}>
      <InputRating
        placeholder="From"
        label="Ratings"
        key={ratingFrom.key}
        {...ratingFrom.getInputProps}
      />
      <InputRating
        placeholder="To"
        key={ratingTo.key}
        {...ratingTo.getInputProps}
      />
    </div>
  );
};

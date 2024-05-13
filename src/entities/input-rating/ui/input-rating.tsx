import { FC } from "react";
import { NumberInput } from "@mantine/core";
import classes from "../styles/input-rating.module.css";
import { ChevronRating } from "./chevron-rating/chevron-rating";

interface InputRatingProps {
  placeholder: string;
  label?: string;
}

export const InputRating: FC<InputRatingProps> = ({
  placeholder,
  label,
  ...props
}) => {
  return (
    <NumberInput
      classNames={classes}
      rightSection={<ChevronRating />}
      size="md"
      radius="md"
      max={10}
      min={0}
      maxLength={10}
      placeholder={placeholder}
      label={label}
      {...props}
    />
  );
};

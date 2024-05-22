import { FC } from "react";
import { NumberInput } from "@mantine/core";
import classes from "../styles/input-rating.module.css";
import { ChevronRating } from "./chevron-rating/chevron-rating";

interface InputRatingProps {
  placeholder: string;
  label?: string;
  marginTop?: number;
}

export const InputRating: FC<InputRatingProps> = ({
  placeholder,
  label,
  marginTop,
  ...props
}) => {
  return (
    <NumberInput
      classNames={classes}
      rightSection={<ChevronRating />}
      size="md"
      radius="md"
      mt={marginTop}
      max={10}
      min={0}
      maxLength={10}
      decimalScale={2}
      placeholder={placeholder}
      label={label}
      {...props}
    />
  );
};

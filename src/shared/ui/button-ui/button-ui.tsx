import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@mantine/core";
import classes from "./button-ui.module.css";

interface ButtonUiProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  w: number;
  h: number;
}

export const ButtonUi: FC<ButtonUiProps> = ({ text, w, h, ...props }) => {
  return (
    <Button
      w={w}
      h={h}
      radius="md"
      color="purple.5"
      fw={600}
      classNames={classes}
      {...props}
    >
      {text}
    </Button>
  );
};

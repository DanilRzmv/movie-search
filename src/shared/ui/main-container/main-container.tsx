import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";
import classes from "./main-container.module.css";

interface MainContainerProps {
  size: string;
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children, size }) => {
  return (
    <Container classNames={classes} size={size}>
      {children}
    </Container>
  );
};

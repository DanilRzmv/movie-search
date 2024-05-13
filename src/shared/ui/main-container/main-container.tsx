import { FC, ReactNode } from "react";
import { Container } from "@mantine/core";

interface MainContainerProps {
  size: string;
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children, size }) => {
  return (
    <Container size={size} pt={40} pl={0} pr={0}>
      {children}
    </Container>
  );
};

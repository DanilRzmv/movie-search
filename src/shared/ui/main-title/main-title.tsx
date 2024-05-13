import { FC } from "react";
import { Title } from "@mantine/core";

interface MainTitleProps {
  children: string;
}

export const MainTitle: FC<MainTitleProps> = ({ children }) => {
  return (
    <Title order={1} size={32} lh={1.5}>
      {children}
    </Title>
  );
};

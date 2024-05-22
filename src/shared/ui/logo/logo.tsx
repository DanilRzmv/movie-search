import { FC } from "react";
import { Group, Text } from "@mantine/core";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Logo from "../../../../public/Logo.svg";

interface LogoUIProps {
  cursor?: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export const LogoUI: FC<LogoUIProps> = ({ cursor = "default" }) => {
  return (
    <Group style={{ cursor }} gap="sm">
      <Image src={Logo} alt="ArrowFlicks" />
      <Text
        style={{ fontSize: "1.5rem" }}
        c="purple.5"
        className={poppins.className}
      >
        ArrowFlicks
      </Text>
    </Group>
  );
};

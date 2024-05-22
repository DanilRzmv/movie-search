import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Center, Flex, Image as MantineImage, Text } from "@mantine/core";
import { ButtonUi } from "../../../shared/ui/button-ui/button-ui";

interface NotFoundProps {
  image: any;
  text: string;
  imageMargin: number;
  textMargin: number;
  btnWidth: number;
  btnHeight: number;
  btnText: string;
}

export const NotFound: FC<NotFoundProps> = ({
  image,
  text,
  imageMargin,
  textMargin,
  btnWidth,
  btnHeight,
  btnText,
}) => {
  return (
    <Center h="100vh">
      <Flex direction="column" align="center">
        <MantineImage
          src={image}
          component={Image}
          alt="page not found"
          mb={imageMargin}
        />
        <Text
          style={{ textAlign: "center" }}
          fw={600}
          size="xl"
          mb={textMargin}
        >
          {text}
        </Text>
        <Link href="/">
          <ButtonUi text={btnText} w={btnWidth} h={btnHeight} />
        </Link>
      </Flex>
    </Center>
  );
};

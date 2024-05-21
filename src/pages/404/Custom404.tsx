import { Box, Center, Flex, Text, Image as MantineImage } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { ButtonUi } from "../../shared/ui/button-ui/button-ui";
import { LogoUI } from "../../shared/ui/logo/logo";
import PageNotFound from "../../../public/404.svg";

export const Custom404 = () => {
  return (
    <Box h="100vh" bg="gray.1" pos="relative">
      <div style={{ position: "absolute", top: "24px", left: "24px" }}>
        <LogoUI cursor="default" />
      </div>
      <Center h="100vh">
        <Flex direction="column" align="center">
          <MantineImage
            src={PageNotFound}
            component={Image}
            alt="page not found"
            mb={48}
          />
          <Text style={{ textAlign: "center" }} fw={600} size="xl" mb={16}>
            We can’t find the page you are looking for
          </Text>
          <Link href="/">
            <ButtonUi text="Go Home" w={103} h={40} />
          </Link>
        </Flex>
      </Center>
    </Box>
  );
};

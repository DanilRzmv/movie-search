import { Box } from "@mantine/core";
import { NotFound } from "../../entities/not-found";
import { LogoUI } from "../../shared/ui/logo/logo";
import PageNotFound from "../../../public/404.svg";

export const Custom404 = () => {
  return (
    <Box h="100vh" bg="gray.1" pos="relative">
      <div style={{ position: "absolute", top: "24px", left: "24px" }}>
        <LogoUI />
      </div>
      <NotFound
        image={PageNotFound}
        text="We can’t find the page you are looking for"
        imageMargin={48}
        textMargin={16}
        btnWidth={103}
        btnHeight={40}
        btnText="Go Home"
      />
    </Box>
  );
};

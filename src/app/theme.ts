import { Container, createTheme, rem } from "@mantine/core";

const CONTAINER_SIZES: Record<string, string> = {
  md: rem(980),
};
export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  components: {
    Container: Container.extend({
      vars: (_, { size }) => ({
        root: {
          "--container-size":
            size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
  colors: {
    gray: [
      "#FFFFFF",
      "#F5F5F6",
      "#EAEBED",
      "#D5D6DC",
      "#ACADB9",
      "#7B7C88",
      "#232134",
      "#232134",
      "#232134",
      "#232134",
    ],
    purple: [
      "#F2ECFA",
      "#F2EBF9",
      "#E5D5FA",
      "#D1B4F8",
      "#BD93F7",
      "#9854F6",
      "#541F9D",
      "#541F9D",
      "#541F9D",
      "#541F9D",
    ],
  },
});

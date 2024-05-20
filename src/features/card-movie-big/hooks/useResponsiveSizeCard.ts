import { useMediaQuery } from "@mantine/hooks";

export const useResponsiveSizeCard = () => {
  const matches = useMediaQuery("(max-width: 24.37rem)");
  if (matches) {
    return {
      imageSize: { w: 190, h: 270 },
      additionalInfoSize: { w: 100 },
    };
  } else {
    return {
      imageSize: { w: 250, h: 352 },
      additionalInfoSize: { w: 140 },
    };
  }
};

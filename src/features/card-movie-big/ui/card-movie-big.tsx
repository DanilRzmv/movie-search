import { FC } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useResponsiveSizeCard } from "../hooks/useResponsiveSizeCard";
import { Card } from "../../../entities/card";
import { formatDate } from "../../../shared/utils/format-date";
import { formatTime } from "../../../shared/utils/format-duration";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { CardBig } from "../../../shared/type/type";

interface CardMovieProps {
  movie: CardBig;
}

const maxWidth = {
  maxWidthMainContainer: 800,
  maxWidthSubContainer: 708,
  maxWidthContent: 442,
};

export const CardMovieBig: FC<CardMovieProps> = ({ movie }) => {
  const { release_date, genres_label, budget, revenue, runtime } = movie;
  const matches = useMediaQuery("(max-width: 70rem)");
  const { additionalInfoSize, imageSize } = useResponsiveSizeCard();

  const additionalInfo = [
    { id: 0, label: "Duration", value: formatTime(runtime) },
    { id: 1, label: "Premiere", value: formatDate(release_date) },
    { id: 2, label: "Budget", value: formatCurrency(budget) },
    { id: 3, label: "Gross worldwide", value: formatCurrency(revenue) },
    { id: 4, label: "Genres", value: genres_label.join(", ") },
  ];

  return (
    <Card
      imageSize={imageSize}
      maxWidth={maxWidth}
      matches={matches}
      additionalInfo={additionalInfo}
      additionalInfoSize={additionalInfoSize}
      movie={movie}
    />
  );
};

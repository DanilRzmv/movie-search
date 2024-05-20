import { FC } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import { Card } from "../../../entities/card";
import { MoviesWithGenresLabel } from "../../../shared/type/type";

interface CardMovieProps {
  movie: MoviesWithGenresLabel;
}

const maxWidth = {
  maxWidthMainContainer: 482,
  maxWidthSubContainer: 398,
  maxWidthContent: 263,
};

const imageSize = { w: 119, h: 170 };

export const CardMovie: FC<CardMovieProps> = ({ movie }) => {
  const { id, genres_label } = movie;
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 32.8125rem)");

  const additionalInfo = [
    { id: 1, label: "Genres", value: genres_label.join(", ") },
  ];

  const handleCardClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <Card
      movie={movie}
      imageSize={imageSize}
      maxWidth={maxWidth}
      matches={matches}
      additionalInfo={additionalInfo}
      lineClamp={1}
      onCardClick={handleCardClick}
    />
  );
};

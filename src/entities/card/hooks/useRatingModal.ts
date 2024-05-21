import { PointerEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useDisclosure } from "@mantine/hooks";
import { AppDispatch, reRenderListRatedMovie } from "../../../root";
import { setRatedMovie } from "../utils/set-rated-movie";
import { removeRatedMovie } from "../utils/remove-rated-movie";
import { MoviesWithGenresLabel } from "../../../shared/type/type";

export const useRatingModal = (
  movie: MoviesWithGenresLabel,
  id: number,
  rating: number
) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isRating, setIsRating] = useState<number | null>(rating);
  const [opened, { open, close }] = useDisclosure(false);
  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    event.stopPropagation();
    open();
  };

  const onSave = (ratingModal: number) => {
    setIsRating(ratingModal);
    setRatedMovie(movie, ratingModal);
    close();
  };

  const onRemove = () => {
    setIsRating(null);
    removeRatedMovie(id);
    dispatch(reRenderListRatedMovie(id));
    close();
  };

  const isZeroRating = isRating === 0 ? 1 : isRating ?? 0;

  return {
    isZeroRating,
    opened,
    isRating,
    handlePointerUp,
    onSave,
    onRemove,
    close,
  };
};

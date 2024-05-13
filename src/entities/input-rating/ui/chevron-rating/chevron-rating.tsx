import { Down } from "./down";
import { Up } from "./up";
import classes from "../../styles/chevron-rating.module.css";

export const ChevronRating = () => {
  return (
    <div className={classes.wrapper}>
      <Up />
      <Down />
    </div>
  );
};

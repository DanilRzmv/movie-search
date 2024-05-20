import { Button } from "@mantine/core";
import classes from "../styles/search-btn.module.css";

export const SearchBtn = () => {
  return (
    <Button
      classNames={{ root: classes.root_search }}
      radius="md"
      color="purple.5"
      fw={600}
    >
      Search
    </Button>
  );
};

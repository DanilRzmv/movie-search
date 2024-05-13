import { Filters } from "../../../shared/type/type";

export const CheckResetForm = (
  initialState: Filters,
  newState: Filters
): boolean => {
  if (Object.keys(initialState).length !== Object.keys(newState).length) {
    return false;
  }

  for (let key in initialState) {
    const newStateValue = newState[key as keyof Filters]?.toString() ?? "";
    if (initialState[key as keyof Filters].toString() !== newStateValue) {
      return false;
    }
  }

  return true;
};

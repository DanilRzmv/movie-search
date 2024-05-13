export const years = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1895;

  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => `${currentYear - index}`
  );

  return yearsArray;
};

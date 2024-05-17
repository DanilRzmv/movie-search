export const formatYear = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
  });
};

export const formatDate = (date: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month, day] = date.split("-").map(Number);
  const monthName = months[month - 1];

  return `${monthName} ${day}, ${year}`;
};

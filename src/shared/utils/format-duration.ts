export const formatTime = (minutes: number) => {
  if (!minutes) return "";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedHours = hours > 0 ? `${hours}h ` : "";
  const formattedMinutes = `${
    remainingMinutes < 10 ? "0" : ""
  }${remainingMinutes}m`;

  return formattedHours + formattedMinutes;
};

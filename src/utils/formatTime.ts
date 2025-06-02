export const timeTrack = (timeSec: number): string => {
  const roundSeconds = Math.floor(timeSec);
  const minutes = Math.floor(roundSeconds / 60);
  const remainingSeconds = (roundSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};

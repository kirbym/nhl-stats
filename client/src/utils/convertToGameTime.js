export function convertToGameTime(timeAsInt) {
  let seconds = timeAsInt % 60;
  let minutes = (timeAsInt - seconds) / 60;

  return `${minutes}:${seconds}`;
}

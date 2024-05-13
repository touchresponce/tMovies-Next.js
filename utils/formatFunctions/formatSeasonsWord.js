export default function formatSeasonsWord(numSeasons) {
  if (numSeasons % 10 === 1 && numSeasons % 100 !== 11) {
    return `${numSeasons} сезон`;
  } else if (
    numSeasons % 10 >= 2 &&
    numSeasons % 10 <= 4 &&
    (numSeasons % 100 < 12 || numSeasons % 100 > 14)
  ) {
    return `${numSeasons} сезона`;
  } else {
    return `${numSeasons} сезонов`;
  }
}

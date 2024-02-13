export const formatTypeText = (type) => {
  switch (type) {
    case "movie":
      return "фильм";

    case "tv-series":
    case "animated-series":
      return "сериал";

    case "anime":
      return "аниме";

    case "cartoon":
      return "мультфильм";

    default:
      return "";
  }
};

import { CURRENT_YEAR } from "./currentYear";

export const HEADER_LINKS_MAIN = [
  { title: "Главная", value: "/" },
  { title: "Каталог", value: "/catalog" },
];

export const HEADER_LINKS_SIDEBAR = [
  ...HEADER_LINKS_MAIN,
  { title: "Фильмы", value: "/catalog/movie" },
  { title: "Сериалы", value: "/catalog/tv-series" },
  { title: "Мультфильмы", value: "/catalog/cartoon" },
  { title: "Аниме", value: "/catalog/anime" },
];

const notNullFields =
  "notNullFields=id&notNullFields=name&notNullFields=poster.url";

const selectFields =
  "selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=enName&selectFields=type&selectFields=year&selectFields=description&selectFields=shortDescription&selectFields=movieLength&selectFields=isSeries&selectFields=ticketsOnSale&selectFields=totalSeriesLength&selectFields=seriesLength&selectFields=ratingMpaa&selectFields=ageRating&selectFields=top10&selectFields=top250&selectFields=typeNumber&selectFields=status&selectFields=names&selectFields=logo&selectFields=poster&selectFields=backdrop&selectFields=rating&selectFields=votes&selectFields=genres&selectFields=countries&selectFields=releaseYears";

export const LINKS_MAIN = {
  mainSlider: `https://api.kinopoisk.dev/v1.4/movie?limit=6&${selectFields}&${notNullFields}&notNullFields=ageRating&sortField=votes.imdb&sortType=-1&type=movie&type=tv-series&year=${
    CURRENT_YEAR - 1
  }-${CURRENT_YEAR}&countries.name=!Индия`,
  personMovies: `https://api.kinopoisk.dev/v1.4/movie?limit=250&${selectFields}&${notNullFields}&sortField=year&sortType=-1&persons.id=`,
  search: `https://api.kinopoisk.dev/v1.4/movie?limit=42&${selectFields}&${notNullFields}&genres.name=!для+взрослых&genres.name=!концерт&genres.name=!церемония`,
  fastSearch: "https://api.kinopoisk.dev/v1.4/movie/search?limit=48",
  savedMovies: `https://api.kinopoisk.dev/v1.4/movie?limit=250&${selectFields}&${notNullFields}&`,
};

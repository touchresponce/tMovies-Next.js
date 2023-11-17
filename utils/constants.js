export const CURRENT_YEAR = new Date().getFullYear();

export const HEADER_LINKS = [
  { title: "Главная", value: "/" },
  // { title: "Фильмы", value: "/movie" },
  // { title: "Сериалы", value: "/tv-series" },
  // { title: "Мультфильмы", value: "/cartoon" },
  // { title: "Аниме", value: "/anime" },
  { title: "Каталог", value: "/catalog" },
];

export const OPTIONS_ORDER = [
  { title: "Рекомендуемые", value: "recommended" },
  { title: "По рейтингу", value: "rating" },
  { title: "По дате выхода", value: "date" },
];

export const OPTIONS_TYPE = [
  "Фильм",
  "Сериал",
  "Мультфильм",
  "Аниме",
  "Мультсериал",
];

export const OPTIONS_GENRES = [
  { title: "Все жанры", value: "" },
  { title: "Боевики", value: "боевик" },
  { title: "Семейные", value: "семейный" },
  { title: "Мелодрамы", value: "мелодрама" },
  { title: "Драмы", value: "драма" },
  { title: "Приключения", value: "приключения" },
  { title: "Комедии", value: "комедия" },
  { title: "Детективы", value: "детектив" },
  { title: "Криминал", value: "криминал" },
  { title: "Ужасы", value: "ужасы" },
  { title: "Фантастика", value: "фантастика" },
  { title: "Фэнтези", value: "фэнтези" },
  { title: "Триллеры", value: "триллер" },
  { title: "Фильм-нуар", value: "фильм-нуар" },
  { title: "Вестерны", value: "вестерн" },
  { title: "Военные", value: "военный" },
  { title: "Биография", value: "биография" },
];

export const OPTIONS_YEARS = [
  { title: "Все года", value: "" },
  { title: "2022-2023", value: "2022-2023" },
  { title: "2020-2021", value: "2020-2021" },
  { title: "2014-2019", value: "2014-2019" },
  { title: "2010-2013", value: "2010-2013" },
  { title: "2000-2009", value: "2000-2009" },
  { title: "1990-1999", value: "1990-1999" },
  { title: "1980-1989", value: "1980-1989" },
  { title: "1970-1979", value: "1970-1979" },
  { title: "1960-1969", value: "1960-1969" },
];

export const OPTIONS_RATING = [
  { title: "Любой рейтинг", value: "" },
  { title: "9-10", value: "9-10" },
  { title: "8-10", value: "8-10" },
  { title: "7-10", value: "7-10" },
  { title: "6-10", value: "6-10" },
  { title: "5-10", value: "5-10" },
  { title: "1-4", value: "1-4" },
];

export const SWIPER_BREAKPOINTS_SHORTCUTS = {
  1480: {
    slidesPerView: 8,
    spaceBetween: 15,
  },
  1280: {
    slidesPerView: 7,
    spaceBetween: 14,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 13,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 12,
  },
  320: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
};

export const SWIPER_BREAKPOINTS_VERTICAL = {
  1480: {
    slidesPerView: 6.3,
  },
  1280: {
    slidesPerView: 5.2,
  },
  1024: {
    slidesPerView: 4.1,
  },
  768: {
    slidesPerView: 3.4,
  },
  320: {
    slidesPerView: 2.1,
  },
};

export const SWIPER_BREAKPOINTS_HORIZONT = {
  1480: {
    slidesPerView: 5.2,
  },
  1280: {
    slidesPerView: 4.1,
  },
  1024: {
    slidesPerView: 3.6,
  },
  768: {
    slidesPerView: 2.7,
  },
  320: {
    slidesPerView: 1.2,
  },
};

export const SWIPER_BREAKPOINTS_BIG = {
  1480: {
    slidesPerView: 1.7,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 1.4,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 1.3,
    spaceBetween: 12,
  },
  768: {
    slidesPerView: 1.2,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 1.1,
  },
};

const notNullFields =
  "notNullFields=id&notNullFields=name&notNullFields=poster.url";

const selectFields =
  "selectFields=id&selectFields=name&selectFields=enName&selectFields=alternativeName&selectFields=description&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=backdrop&selectFields=logo";

export const LINKS_MAIN = {
  mainSlider: `https://api.kinopoisk.dev/v1.4/movie?limit=6&${selectFields}&${notNullFields}&sortField=votes.imdb&sortType=-1&type=movie&type=tv-series&year=2023`,
  bestCartoons: `https://api.kinopoisk.dev/v1.4/movie?limit=18&${selectFields}&${notNullFields}&sortField=votes.imdb&sortType=-1&type=cartoon&type=anime`,
  familyComedy: `https://api.kinopoisk.dev/v1.4/movie?limit=18&type=movie&lists=theme_family_comedy&${notNullFields}&countries.name=!Россия&countries.name=!СССР`,
  best: `https://api.kinopoisk.dev/v1.4/movie?limit=18&${selectFields}&${notNullFields}&sortField=votes.imdb&sortType=-1&type=movie&type=tv-series&type=cartoon&year=2023`,
  popular: `https://api.kinopoisk.dev/v1.4/movie?limit=18&type=movie&lists=popular-films&countries.name=!Россия&countries.name=!СССР&${notNullFields}`,
  catastrophe: `https://api.kinopoisk.dev/v1.4/movie?limit=18&lists=theme_catastrophe&${notNullFields}`,
  space: `https://api.kinopoisk.dev/v1.4/movie?limit=18&lists=theme_space&${notNullFields}`,
  comics: `https://api.kinopoisk.dev/v1.4/movie?limit=18&lists=theme_comics&${notNullFields}&sortField=votes.imdb&sortType=-1`,
};

export const LINKS = {
  personMovies: `https://api.kinopoisk.dev/v1.4/movie?limit=250&${selectFields}&${notNullFields}&sortField=year&sortType=-1&persons.id=`,
  search: `https://api.kinopoisk.dev/v1.4/movie?limit=36&${selectFields}&${notNullFields}`,
  fastSearch: "https://api.kinopoisk.dev/v1.4/movie/search?limit=30",
  shortcut: `https://api.kinopoisk.dev/v1.4/movie?limit=18&lists=`,
};

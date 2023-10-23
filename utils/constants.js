export const CURRENT_YEAR = new Date().getFullYear();

export const HEADER_LINKS = [
  { title: "Главная", link: "/" },
  { title: "Фильмы", link: "/movie" },
  { title: "Сериалы", link: "/tv-series" },
  { title: "Мультфильмы", link: "/cartoon" },
  { title: "Аниме", link: "/anime" },
];

export const OPTIONS_ORDER = [
  { title: "Новые", value: "-1" },
  { title: "Старые", value: "1" },
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
    slidesPerView: 2.3,
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
    slidesPerView: 1.4,
  },
};

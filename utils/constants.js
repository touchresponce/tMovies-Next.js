export const CURRENT_YEAR = new Date().getFullYear();

export const HEADER_LINKS_MAIN = [
  { title: "Главная", value: "/" },
  { title: "Каталог", value: "/catalog" },
];

export const HEADER_LINKS_SIDEBAR = [
  { title: "Главная", value: "/" },
  { title: "Каталог", value: "/catalog" },
  { title: "Фильмы", value: "/catalog/movie" },
  { title: "Сериалы", value: "/catalog/tv-series" },
  { title: "Мультфильмы", value: "/catalog/cartoon" },
  { title: "Аниме", value: "/catalog/anime" },
];

export const OPTIONS_ORDER = [
  { title: "Рекомендуемые", value: "recommended" },
  { title: "По рейтингу", value: "rating" },
  { title: "По дате выхода", value: "date" },
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

export const SLIDER_BREAKPOINTS_VERTICAL = {
  1280: {
    perPage: 5,
  },
  1024: {
    perPage: 4,
  },
  768: {
    perPage: 3,
  },
  480: {
    perPage: 2,
  },
};

export const SLIDER_BREAKPOINTS_HORIZONT = {
  1280: {
    perPage: 4,
  },
  1024: {
    perPage: 3,
  },
  768: {
    perPage: 2,
  },
};

const notNullFields =
  "notNullFields=id&notNullFields=name&notNullFields=poster.url";

const selectFields =
  "selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=enName&selectFields=type&selectFields=year&selectFields=description&selectFields=shortDescription&selectFields=movieLength&selectFields=isSeries&selectFields=ticketsOnSale&selectFields=totalSeriesLength&selectFields=seriesLength&selectFields=ratingMpaa&selectFields=ageRating&selectFields=top10&selectFields=top250&selectFields=typeNumber&selectFields=status&selectFields=names&selectFields=logo&selectFields=poster&selectFields=backdrop&selectFields=rating&selectFields=votes&selectFields=genres&selectFields=countries&selectFields=releaseYears";

export const LINKS_MAIN = {
  mainSlider: `https://api.kinopoisk.dev/v1.4/movie?limit=10&${selectFields}&${notNullFields}&notNullFields=ageRating&sortField=votes.imdb&sortType=-1&type=movie&type=tv-series&year=2023`,
  personMovies: `https://api.kinopoisk.dev/v1.4/movie?limit=250&${selectFields}&${notNullFields}&sortField=year&sortType=-1&persons.id=`,
  search: `https://api.kinopoisk.dev/v1.4/movie?limit=36&${selectFields}&${notNullFields}`,
  fastSearch: "https://api.kinopoisk.dev/v1.4/movie/search?limit=30",
};

export const SHORTCUTS = {
  bestOfYear: {
    title: "Лучшее 2023",
    filters: {
      type: ["movie", "tv-series", "cartoon"],
      rating: ["6.5-10"],
      year: ["2023"],
      order: ["recommended"],
      genre: ["!реальное ТВ", "!документальный", "!концерт"],
    },
  },
  bestCartoons: {
    title: "Лучшая анимация",
    filters: {
      type: ["anime", "cartoon"],
      rating: ["6.5-10"],
    },
  },
  familyComedy: {
    title: "Семейные комедии",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["+комедия", "+семейный", "!драма"],
    },
  },
  bestHorror: {
    title: "Лучшие ужасы",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["+ужасы", "!комедия", "!боевик", "!короткометражка"],
    },
  },
  comedyAction: {
    title: "Комедийные боевики",
    filters: {
      lists: ["theme_action_comdey"],
    },
  },
  catastrophe: {
    title: "Фильмы-катастрофы",
    filters: {
      lists: ["theme_catastrophe"],
    },
  },
  space: {
    title: "Фильмы про космос",
    filters: {
      lists: ["theme_space"],
    },
  },
  vampire: {
    title: "Фильмы про вампиров",
    filters: {
      lists: ["theme_vampire"],
    },
  },
  comics: {
    title: "Фильмы по комиксам",
    filters: {
      lists: ["theme_comics"],
    },
  },
  oscarBestFilm: {
    title: "Оскар",
    filters: {
      lists: ["oscar-best-film"],
    },
  },
  realStory: {
    title: "Фильмы по реальным событиям",
    filters: {
      lists: ["hd-real-story"],
    },
  },
  adaptation: {
    title: "Лучшие экранизации",
    filters: {
      lists: ["hd-adaptation"],
    },
  },
  marvel: {
    title: "Киновселенная MARVEL",
    filters: {
      lists: ["marvel_universe"],
    },
  },
  blockbusters: {
    title: "Блокбастеры",
    filters: {
      lists: ["hd-blockbusters"],
    },
  },
  hbo: {
    title: "Шедевры HBO",
    filters: {
      lists: ["hbo_best"],
    },
  },
  greatestSerials: {
    title: "100 лучших сериалов",
    filters: {
      lists: ["100_greatest_TVseries"],
    },
  },
  themeLove: {
    title: "Фильмы про любовь",
    filters: {
      lists: ["theme_love"],
    },
  },
  boxWorld: {
    title: "Самые кассовые",
    filters: {
      lists: ["box-world-not-usa"],
    },
  },
  mustSee: {
    title: "Стоит посмотреть",
    filters: {
      lists: ["hd-must-see"],
    },
  },
};

//
// Хаяо Миядзаки (аниме)
// Макото Синкай
// Стивен Спилберг
// Стивен Кинг
// Гай Ричи
// Квентин Тарантино
// Кристофер Нолан
//

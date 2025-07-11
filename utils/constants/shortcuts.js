import { CURRENT_YEAR } from "./currentYear";
import { OPTIONS_ORDER } from "./options";

export const SHORTCUTS = {
  bestOfYear: {
    title: "Лучшие новинки",
    filters: {
      type: ["movie", "tv-series", "cartoon"],
      rating: ["6.5-10"],
      year: [`${CURRENT_YEAR - 1}`, `${CURRENT_YEAR}`],
      // order: ["recommended"],
      order: ["date"],
      genre: ["!реальное ТВ", "!документальный"],
    },
  },
  bestCartoons: {
    title: "Лучшие мультфильмы",
    filters: {
      type: ["cartoon"],
      rating: ["6.8-10"],
      order: ["date"],
    },
  },
  bestAnime: {
    title: "Аниме с высоким рейтингом",
    filters: {
      type: ["anime"],
      rating: ["6.8-10"],
      order: ["date"],
    },
  },
  familyComedy: {
    title: "Семейные комедии",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["!драма", "+комедия", "+семейный"],
      order: ["date"],
    },
  },
  bestHorror: {
    title: "Лучшие ужасы",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["!комедия", "!боевик", "+ужасы"],
      order: ["date"],
    },
  },
  bestShort: {
    title: "Лучшие короткометражки",
    filters: {
      type: ["movie"],
      rating: ["7-10"],
      genre: ["+короткометражка"],
      order: ["date"],
    },
  },
  comedyAction: {
    title: "Комедийные боевики",
    filters: {
      lists: ["theme_action_comdey"],
      order: ["date"],
    },
  },
  catastrophe: {
    title: "Фильмы-катастрофы",
    filters: {
      lists: ["theme_catastrophe"],
      order: ["date"],
    },
  },
  space: {
    title: "Фильмы про космос",
    filters: {
      lists: ["theme_space"],
      order: ["date"],
    },
  },
  vampire: {
    title: "Фильмы про вампиров",
    filters: {
      lists: ["theme_vampire"],
      order: ["date"],
    },
  },
  comics: {
    title: "Фильмы по комиксам",
    filters: {
      lists: ["theme_comics"],
      order: ["date"],
    },
  },
  oscarBestFilm: {
    title: "Оскар",
    filters: {
      lists: ["oscar-best-film"],
      order: ["date"],
    },
  },
  realStory: {
    title: "Фильмы по реальным событиям",
    filters: {
      lists: ["hd-real-story"],
      order: ["date"],
    },
  },
  adaptation: {
    title: "Лучшие экранизации",
    filters: {
      lists: ["hd-adaptation"],
      order: ["date"],
    },
  },
  marvel: {
    title: "Киновселенная MARVEL",
    filters: {
      lists: ["marvel_universe"],
      order: ["date"],
    },
  },
  blockbusters: {
    title: "Блокбастеры",
    filters: {
      lists: ["hd-blockbusters"],
      order: ["date"],
    },
  },
  hbo: {
    title: "Шедевры HBO",
    filters: {
      lists: ["hbo_best"],
      order: ["date"],
    },
  },
  greatestSerials: {
    title: "100 лучших сериалов",
    filters: {
      lists: ["100_greatest_TVseries"],
      order: ["date"],
    },
  },
  themeLove: {
    title: "Фильмы про любовь",
    filters: {
      lists: ["theme_love"],
      order: ["date"],
    },
  },
  boxWorld: {
    title: "Самые кассовые",
    filters: {
      lists: ["box-world-not-usa"],
      order: ["date"],
    },
  },
  mustSee: {
    title: "Стоит посмотреть",
    filters: {
      lists: ["hd-must-see"],
      order: ["date"],
    },
  },
};

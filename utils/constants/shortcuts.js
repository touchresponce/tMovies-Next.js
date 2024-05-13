import { CURRENT_YEAR } from "./currentYear";

export const SHORTCUTS = {
  bestOfYear: {
    title: "Лучшие новинки",
    filters: {
      type: ["movie", "tv-series", "cartoon"],
      rating: ["6.5-10"],
      year: [`${CURRENT_YEAR - 1}`, `${CURRENT_YEAR}`],
      order: ["recommended"],
      genre: ["!реальное ТВ", "!документальный"],
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
      genre: ["!драма", "+комедия", "+семейный"],
    },
  },
  bestHorror: {
    title: "Лучшие ужасы",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["!комедия", "!боевик", "+ужасы"],
    },
  },
  bestShort: {
    title: "Лучшие короткометражки",
    filters: {
      type: ["movie"],
      rating: ["7-10"],
      genre: ["+короткометражка"],
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

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
    title: "Лучшие мультфильмы",
    filters: {
      type: ["cartoon"],
      rating: ["6.8-10"],
      order: ["recommended"],
    },
  },
  bestAnime: {
    title: "Аниме",
    filters: {
      type: ["anime"],
      rating: ["6.8-10"],
      order: ["recommended"],
    },
  },
  familyComedy: {
    title: "Семейные комедии",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["!драма", "+комедия", "+семейный"],
      order: ["recommended"],
    },
  },
  bestHorror: {
    title: "Лучшие ужасы",
    filters: {
      type: ["movie"],
      rating: ["6-10"],
      genre: ["!комедия", "!боевик", "+ужасы"],
      order: ["recommended"],
    },
  },
  bestShort: {
    title: "Лучшие короткометражки",
    filters: {
      type: ["movie"],
      rating: ["7-10"],
      genre: ["+короткометражка"],
      order: ["recommended"],
    },
  },
  comedyAction: {
    title: "Комедийные боевики",
    filters: {
      lists: ["theme_action_comdey"],
      order: ["recommended"],
    },
  },
  catastrophe: {
    title: "Фильмы-катастрофы",
    filters: {
      lists: ["theme_catastrophe"],
      order: ["recommended"],
    },
  },
  space: {
    title: "Фильмы про космос",
    filters: {
      lists: ["theme_space"],
      order: ["recommended"],
    },
  },
  vampire: {
    title: "Фильмы про вампиров",
    filters: {
      lists: ["theme_vampire"],
      order: ["recommended"],
    },
  },
  comics: {
    title: "Фильмы по комиксам",
    filters: {
      lists: ["theme_comics"],
      order: ["recommended"],
    },
  },
  oscarBestFilm: {
    title: "Оскар",
    filters: {
      lists: ["oscar-best-film"],
      order: ["recommended"],
    },
  },
  realStory: {
    title: "Фильмы по реальным событиям",
    filters: {
      lists: ["hd-real-story"],
      order: ["recommended"],
    },
  },
  adaptation: {
    title: "Лучшие экранизации",
    filters: {
      lists: ["hd-adaptation"],
      order: ["recommended"],
    },
  },
  marvel: {
    title: "Киновселенная MARVEL",
    filters: {
      lists: ["marvel_universe"],
      order: ["recommended"],
    },
  },
  blockbusters: {
    title: "Блокбастеры",
    filters: {
      lists: ["hd-blockbusters"],
      order: ["recommended"],
    },
  },
  hbo: {
    title: "Шедевры HBO",
    filters: {
      lists: ["hbo_best"],
      order: ["recommended"],
    },
  },
  greatestSerials: {
    title: "100 лучших сериалов",
    filters: {
      lists: ["100_greatest_TVseries"],
      order: ["recommended"],
    },
  },
  themeLove: {
    title: "Фильмы про любовь",
    filters: {
      lists: ["theme_love"],
      order: ["recommended"],
    },
  },
  boxWorld: {
    title: "Самые кассовые",
    filters: {
      lists: ["box-world-not-usa"],
      order: ["recommended"],
    },
  },
  mustSee: {
    title: "Стоит посмотреть",
    filters: {
      lists: ["hd-must-see"],
      order: ["recommended"],
    },
  },
};

export const CURRENT_YEAR = new Date().getFullYear();

export const HEADER_LINKS = [
  { title: "Главная", link: "/" },
  { title: "Фильмы", link: "/movie" },
  { title: "Сериалы", link: "/tv-series" },
  { title: "Мультфильмы", link: "/cartoon" },
  { title: "Аниме", link: "/anime" },
];

export const OPTIONS_ORDER = [
  { id: 1, value: "Новые" },
  { id: 2, value: "Старые" },
];

export const OPTIONS_TYPE = [
  "Фильм",
  "Сериал",
  "Мультфильм",
  "Аниме",
  "Мультсериал",
];

export const OPTIONS_GENRES = [
  { id: 1, value: "Все жанры" },
  { id: 2, value: "боевик" },
  { id: 3, value: "семейный" },
  { id: 4, value: "мелодрама" },
  { id: 5, value: "драма" },
  { id: 6, value: "приключения" },
  { id: 7, value: "комедия" },
  { id: 8, value: "детектив" },
  { id: 9, value: "криминал" },
  { id: 10, value: "ужасы" },
  { id: 11, value: "фантастика" },
  { id: 12, value: "фэнтези" },
  { id: 13, value: "триллер" },
  { id: 14, value: "фильм-нуар" },
  { id: 15, value: "вестерн" },
  { id: 16, value: "военный" },
  { id: 17, value: "биография" },
];

export const OPTIONS_YEARS = [
  { id: 1, value: "Все года" },
  { id: 2, value: "2022-2023" },
  { id: 3, value: "2020-2021" },
  { id: 4, value: "2014-2019" },
  { id: 5, value: "2010-2014" },
  { id: 6, value: "2000-2009" },
  { id: 7, value: "1990-1999" },
  { id: 8, value: "1980-1989" },
  { id: 9, value: "1970-1979" },
  { id: 10, value: "1960-1969" },
];

export const OPTIONS_RATING = [
  { id: 1, value: "Любой рейтинг" },
  { id: 2, value: "9-10" },
  { id: 3, value: "8-10" },
  { id: 4, value: "7-10" },
  { id: 5, value: "6-10" },
  { id: 6, value: "5-10" },
  { id: 7, value: "1-4" },
];

export const SWIPER_BREAKPOINTS = {
  1480: {
    slidesPerView: 6.3,
  },
  1280: {
    slidesPerView: 5.2,
  },
  1024: {
    slidesPerView: 4.3,
  },
  768: {
    slidesPerView: 3.4,
  },
  320: {
    slidesPerView: 2.3,
  },
};

// export const SWIPER_STYLES_BUTTONS = {
//   injectStyles: [
//     `.swiper-button-prev.swiper-button-disabled  {
//       opacity: 0;
//       cursor: auto;
//       pointer-events: none;
//     }`,

//     `.swiper-button-next.swiper-button-disabled  {
//       opacity: 0;
//       cursor: auto;
//       pointer-events: none;
//     }`,

//     `.swiper-button-prev {
//       font-family: swiper-icons;
//       font-size: var(--swiper-navigation-size);
//       text-transform: none!important;
//       letter-spacing: 0;
//       font-variant: initial;
//       line-height: 1;
//       transition: all 0.2s ease-in-out;
//     }`,

//     `.swiper-button-prev:after {
//       border-radius: 6px;
//       border: 1px solid #222;
//       padding: 20px;
//       backdrop-filter: blur(18px);
//     }`,

//     `.swiper-button-next {
//       font-family: swiper-icons;
//       font-size: var(--swiper-navigation-size);
//       text-transform: none!important;
//       letter-spacing: 0;
//       font-variant: initial;
//       line-height: 1;
//       transition: all 0.2s ease-in-out;
//     }`,

//     `.swiper-button-next:after {
//       border-radius: 6px;
//       border: 1px solid #222;
//       padding: 20px;
//       backdrop-filter: blur(18px);
//     }`,

//     `.swiper-button-prev:hover {
//       transform: scale(1.2);
//     }`,

//     `.swiper-button-next:hover {
//       transform: scale(1.2);
//     }`,

//     `.swiper-button-next,
//     :host(.swiper-rtl) .swiper-button-prev {
//       right: var(--swiper-navigation-sides-offset, 30px);
//       left: auto;
//     }`,

//     `.swiper-button-prev,
//     :host(.swiper-rtl) .swiper-button-next {
//       left: var(--swiper-navigation-sides-offset, 30px);
//       right: auto;
//     }`,

//     `@media screen and (max-width: 760px) {
//       .swiper-button-prev {
//         display: none;
//       }

//       .swiper-button-next {
//         display: none;
//       }
//     }`,
//   ],
// };

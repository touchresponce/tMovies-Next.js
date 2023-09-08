import { create } from "zustand";
import { getMovieByFilters, getFastSearch } from "@/utils/api";
import { CURRENT_YEAR } from "@/utils/constants";
import { updateLink } from "@/utils/updateLink";

/*******************************************************************************************
 * быстрый поиск
 */
export const useFastSearch = create((set) => ({
  initial: {
    content: [],
  },

  getContent: async (query) => {
    set({ status: "loading" });
    const { docs } = await getFastSearch(query);
    docs.length ? set({ status: "succsess" }) : set({ status: "empty" });
    set({ content: [docs] });
  },

  reset: () => {
    set((state) => ({ ...state, ...state.initial }));
  },
}));

/*******************************************************************************************
 * поиск
 */
export const useSearch = create((set, get) => ({
  initial: {
    content: [],
    totalPages: 0,
    currentPage: 0,
    status: "init", // init | loading | error | empty | succsess
  },

  getContent: async () => {
    set({ status: "loading" });
    const { link } = await useFilters.getState();

    const { docs, pages, page } = await getMovieByFilters(link);
    docs.length ? set({ status: "succsess" }) : set({ status: "empty" });
    set({
      content: [...docs],
      totalPages: pages,
      currentPage: page,
    });
  },

  reset: () => {
    set((state) => ({ ...state, ...state.initial }));
  },
}));

/*******************************************************************************************
 * фильтры
 */
export const useFilters = create((set, get) => ({
  filters: {
    genre: "",
    order: "новые",
    // type: "",
    type: "movie",
    rating: "1-10",
    year: `1960-${CURRENT_YEAR}`,
  },
  link: "",

  changeFilters: (type, value) => {
    set({
      filters: { ...get().filters, [type]: value },
      link: updateLink(get().filters),
    });
  },
}));

// resetOne: (type) => {
//   set((state) => ({ ...state, [type]: get().initial[type] }));
// },

// reset: () => {
//   set(get().initial);
// },

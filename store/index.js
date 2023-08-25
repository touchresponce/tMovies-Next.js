import { create } from "zustand";
import { getMovieByFilters, getFastSearch } from "@/utils/api";

/**
 *
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

/**
 *
 */
export const useSearch = create((set) => ({
  initial: {
    content: [],
    totalPages: 0,
    currentPage: 0,
    status: "init", // init | loading | error | empty | succsess
  },

  getContent: async () => {
    set({ status: "loading" });
    const { docs, pages, page } = await getMovieByFilters();
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

/**
 *
 */
export const useFilters = create((set) => ({
  filters: {
    genre: "",
    order: "новые",
    type: "",
    keyword: "",
    rating: "1-10",
    // year: `1960-${CURRENT_YEAR}`,
  },
  link: "",

  changeFilters: () => set((state) => ({})),
}));

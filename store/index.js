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
    status: "init", // init | loading | error | empty | succsess
  },

  getContent: async (query) => {
    set({ status: "loading" });
    const { docs } = await getFastSearch(query);
    docs.length ? set({ status: "succsess" }) : set({ status: "empty" });
    set({ content: [...docs] });
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

  getContent: async (pageNum) => {
    set({ status: "loading" });
    const { link } = useFilters.getState();
    const req = pageNum ? `${link}&page=${pageNum}` : link;
    const { docs, pages, page } = await getMovieByFilters(req);
    docs.length ? set({ status: "succsess" }) : set({ status: "empty" });
    set({
      content: [...get().content, ...docs],
      totalPages: pages,
      currentPage: page,
    });
  },

  resetContent: () => {
    set({ content: [] });
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
    type: "",
    rating: "1-10",
    year: `1960-${CURRENT_YEAR}`,
  },
  link: "",

  changeFilters: (type, value) => {
    useSearch.getState().resetContent();
    set({
      filters: { ...get().filters, [type]: value },
    });
    set({
      link: updateLink(get().filters),
    });
  },

  reset: () => {
    set({
      filters: {
        genre: "",
        order: "новые",
        type: "",
        rating: "1-10",
        year: `1960-${CURRENT_YEAR}`,
      },
      link: "",
    });
  },

  resetOne: (type) => {
    set((state) => ({ ...state, [type]: get().initial[type] }));
  },
}));

/*******************************************************************************************
 * модалки
 */
export const useModals = create((set) => ({
  initial: {
    fastSearch: false,
    burger: false,
  },

  openSearch: () => {
    set({ fastSearch: true });
  },

  closeSearch: () => {
    set({ fastSearch: false });
  },

  openBurget: () => {
    set({ burger: true });
  },

  closeBurger: () => {
    set({ burger: false });
  },

  reset: () => {
    set((state) => ({ ...state, ...state.initial }));
  },
}));

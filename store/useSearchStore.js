import { create } from "zustand";
import { getMovieByFilters } from "@/utils/api";
import { useFilters } from "./useFiltersStore";

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

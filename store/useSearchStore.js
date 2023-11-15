import { create } from "zustand";
import { useFilters } from "./useFiltersStore";
import { getSearch } from "@/utils/actions";

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

    try {
      const { docs, pages, page } = await getSearch(req);
      docs.length ? set({ status: "succsess" }) : set({ status: "empty" });
      set({
        content: [...get().content, ...docs],
        totalPages: pages,
        currentPage: page,
      });
    } catch (error) {
      set({ status: "error" });
    }
  },

  resetContent: () => {
    set({ content: [] });
  },

  reset: () => {
    set((state) => ({ ...state, ...state.initial }));
  },
}));

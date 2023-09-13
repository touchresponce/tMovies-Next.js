import { create } from "zustand";
import { updateLink } from "@/utils/updateLink";
import { CURRENT_YEAR } from "@/utils/constants";
import { useSearch } from "./useSearchStore";

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

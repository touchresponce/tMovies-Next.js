import { create } from "zustand";
import { updateLink } from "@/utils/updateLink";
import { CURRENT_YEAR } from "@/utils/constants";
import { useSearch } from "./useSearchStore";

const initialFilters = {
  genre: "",
  order: "новые",
  type: "",
  rating: "1-10",
  year: `1960-${CURRENT_YEAR}`,
};

export const useFilters = create((set, get) => ({
  filters: {
    ...initialFilters,
  },
  link: "",

  changeFilters: (type, value) => {
    useSearch.getState().resetContent();
    if (value === "") {
      set({
        filters: { ...get().filters, [type]: initialFilters[type] },
      });
      set({
        link: updateLink(get().filters),
      });
    } else {
      set({
        filters: { ...get().filters, [type]: value },
      });
      set({
        link: updateLink(get().filters),
      });
    }
  },

  reset: () => {
    set({
      filters: {
        ...initialFilters,
      },
      link: "",
    });
  },
}));

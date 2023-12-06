import { create } from "zustand";
import { updateLink } from "@/utils/updateLink";
import { CURRENT_YEAR } from "@/utils/constants";
import { useSearch } from "./useSearchStore";

const initialFilters = {
  type: [],
  genre: [],
  rating: ["1-10"],
  year: [`1960-${CURRENT_YEAR}`],
  order: ["recommended"],
};

export const useFilters = create((set, get) => ({
  filters: {
    ...initialFilters,
  },
  link: "",

  setFilters: ({ filters }) => {
    for (let key in filters) {
      set({
        filters: { ...get().filters, [key]: filters[key] },
      });
    }
    set({
      link: updateLink(get().filters),
    });
  },

  changeFilters: (type, value) => {
    useSearch.getState().reset();
    if (value === "") {
      set({
        filters: { ...get().filters, [type]: initialFilters[type] },
      });
      set({
        link: updateLink(get().filters),
      });
    } else {
      set({
        filters: { ...get().filters, [type]: [value] },
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

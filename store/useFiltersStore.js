import { create } from "zustand";
import { updateLink } from "@/utils/updateLink";
import { CURRENT_YEAR } from "@/utils/constants";
import { useSearch } from "./useSearchStore";
import { OPTIONS_ORDER } from "@/utils/constants";

const initialFilters = {
  genre: [],
  type: [],
  rating: ["1-10"],
  year: [`1960-${CURRENT_YEAR}`],
  order: [OPTIONS_ORDER[0].value], // date
};

export const useFilters = create((set, get) => ({
  filters: {
    ...initialFilters,
  },
  link: "",

  // shortcuts
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

  changeFilter: (type, value) => {
    const { filters } = get();

    useSearch.getState().resetContent();

    if (value === "") {
      set({
        filters: { ...filters, [type]: initialFilters[type] },
      });
    } else {
      if (type === "genre") {
        set({
          filters: {
            ...filters,
            genre: [...initialFilters[type], `+${value}`],
          },
        });
      } else {
        set({
          filters: { ...filters, [type]: [value] },
        });
      }
    }

    set({
      link: updateLink(get().filters),
    });
  },

  resetFilters: () => {
    set({
      filters: {
        ...initialFilters,
      },
      link: "",
    });
  },
}));

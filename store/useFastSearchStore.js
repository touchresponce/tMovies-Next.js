import { create } from "zustand";
import { getFastSearch } from "@/utils/actions";

const initial = {
  content: [],
  status: "init", // init | loading | error | empty | succsess
};

export const useFastSearch = create((set) => ({
  ...initial,

  getContent: async (query) => {
    set({ status: "loading" });

    try {
      const { docs } = await getFastSearch(query);
      docs.length ? set({ status: "succsess" }) : set({ status: "empty" });
      set({ content: [...docs] });
    } catch (error) {
      set({ status: "error" });
    }
  },

  reset: () => {
    set({ ...initial });
  },
}));

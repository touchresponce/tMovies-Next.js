import { create } from "zustand";
import { getFastSearch } from "@/utils/api";

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

import { create } from "zustand";

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

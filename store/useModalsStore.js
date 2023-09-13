import { create } from "zustand";

export const useModals = create((set) => ({
  initial: {
    fastSearch: false,
    burger: false,
    movieModal: false,
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

  openMovieModal: () => {
    set({ movieModal: true });
  },

  closeMovieModal: () => {
    set({ movieModal: false });
  },

  reset: () => {
    set((state) => ({ ...state, ...state.initial }));
  },
}));

import { create } from "zustand";

export const useModals = create((set) => ({
  initial: {
    fastSearch: false,
    sidebar: false,
    movieModal: false,
  },

  openSearch: () => {
    set({ fastSearch: true });
  },

  closeSearch: () => {
    set({ fastSearch: false });
  },

  openSidebar: () => {
    set({ sidebar: true });
  },

  closeSidebar: () => {
    set({ sidebar: false });
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

import { create } from "zustand";
import {
  getProfile,
  saveMovieById,
  deleteMovieById,
  updateProfile,
} from "@/services/user.service";
import { logout } from "@/services/auth.service";
import { toast } from "sonner";
import { getSavedMovies } from "@/utils/actions";

const handleErrorResponse = (set, error) => {
  const errorMessage = error.message;
  set({ status: "error", errorMessage });
  toast.error(errorMessage);
};

export const useProfile = create((set, get) => ({
  profile: null,
  moviesByApi: [],
  status: "init", // init | loading | error | success
  errorMessage: "",

  handleGetProfile: async () => {
    set({ status: "loading" });
    try {
      const data = await getProfile();
      set({ profile: data, status: "success" });
    } catch (error) {
      handleErrorResponse(set, error);
    }
  },

  handleUpdateProfile: async (data) => {
    set({ status: "loading" });
    try {
      const response = await updateProfile(data);
      set({ profile: response, status: "success" });
    } catch (error) {
      handleErrorResponse(set, error);
    }
  },

  handleLogoutProfile: async () => {
    try {
      await logout();
      await get().reset();
    } catch (error) {
      handleErrorResponse(set, error);
    }
  },

  handleSaveMovie: async (id) => {
    set({ status: "loading" });
    try {
      const { data } = await saveMovieById(id);
      set({ profile: data, status: "success" });
      toast("Фильм сохранён");
    } catch (error) {
      handleErrorResponse(set, error);
    }
  },

  handleDeleteMovie: async (id) => {
    set({ status: "loading" });
    try {
      const { data } = await deleteMovieById(id);
      set({ profile: data, status: "success" });
      toast("Фильм удалён");
    } catch (error) {
      handleErrorResponse(set, error);
    }
  },

  handleGetSavedMovies: async () => {
    set({ status: "loading" });
    try {
      const { savedMovies } = await get().profile;
      const { docs } = await getSavedMovies(savedMovies);
      const moviesMap = new Map(docs.map((doc) => [doc.id, doc]));
      const sortedMovies = savedMovies.map((savedMovie) =>
        moviesMap.get(savedMovie.movieId)
      );
      set({ moviesByApi: sortedMovies, status: "success" });
    } catch (error) {
      handleErrorResponse(set, error);
    }
  },

  reset: () => {
    set(() => ({
      profile: null,
      status: "init",
      errorMessage: "",
    }));
  },
}));

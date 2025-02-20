import { axiosWithAuth } from "@/api/interceptors";

const BASE_URL = "/user";

export const getProfile = async () => {
  const response = await axiosWithAuth.get(BASE_URL);
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await axiosWithAuth.put(`${BASE_URL}/update`, data);
  return response.data;
};

export const saveMovieById = async (id) => {
  const data = { movieId: id };
  const response = await axiosWithAuth.put(`${BASE_URL}/save`, data);
  return response;
};

export const deleteMovieById = async (id) => {
  const data = { movieId: id };
  const response = await axiosWithAuth.put(`${BASE_URL}/delete`, data);
  return response;
};

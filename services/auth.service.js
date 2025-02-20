import { axiosClassic } from "@/api/interceptors";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

// type = signup | signin
export const mainAuth = async (type, data) => {
  const response = await axiosClassic.post(`/auth/${type}`, data);

  if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

  return response;
};

export const getNewTokens = async () => {
  const response = await axiosClassic.post("/auth/access-token");

  if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

  return response;
};

export const logout = async () => {
  const response = await axiosClassic.post("/auth/logout");

  if (response.data) removeFromStorage();

  return response;
};

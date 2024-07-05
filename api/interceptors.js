import axios from "axios";
import { errorCatch } from "./error";
import {
  getAccessToken,
  removeFromStorage,
} from "@/services/auth-token.service";
import { getNewTokens } from "@/services/auth.service";

const url =
  process.env.ENV === "prod"
    ? process.env.NEXT_PUBLIC_CONFIG_LINK_PROD
    : process.env.NEXT_PUBLIC_CONFIG_LINK_DEV;

const options = {
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await getNewTokens();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") removeFromStorage();
      }
    }

    throw error;
  }
);

export { axiosClassic, axiosWithAuth };

import axios from "axios";
import { errorCatch } from "./error";
import {
  getAccessToken,
  removeFromStorage,
} from "@/services/auth-token.service";
import { getNewTokens } from "@/services/auth.service";

const JWT_EXPIRED = "jwt expired";
const JWT_REQUIRED = "jwt must be provided";

const URL =
  process.env.ENV === "prod"
    ? process.env.NEXT_PUBLIC_CONFIG_LINK_PROD
    : process.env.NEXT_PUBLIC_CONFIG_LINK_DEV;

const options = {
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

//
axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

//
axiosWithAuth.interceptors.response.use(null, async (error) => {
  const originalRequest = error.config;

  const isAuthError =
    error?.response?.status === 401 ||
    [JWT_EXPIRED, JWT_REQUIRED].includes(errorCatch(error));

  if (isAuthError && !originalRequest._isRetry) {
    originalRequest._isRetry = true;

    try {
      await getNewTokens();
      return axiosWithAuth.request(originalRequest);
    } catch (error) {
      if (errorCatch(error) === "jwt expired") removeFromStorage();
    }
  }

  throw error;
});

export { axiosClassic, axiosWithAuth };

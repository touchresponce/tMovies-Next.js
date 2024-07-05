import { axiosWithAuth } from "@/api/interceptors";

const BASE_URL = "/user/profile";

export const getProfile = async () => {
  const response = await axiosWithAuth.get(BASE_URL);
  return response.data;
};

export const update = async (data) => {
  const response = await axiosWithAuth.put(BASE_URL, data);
  return response.data;
};

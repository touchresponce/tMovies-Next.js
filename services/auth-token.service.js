import Cookies from "js-cookie";

const { NODE_ENV, CONFIG_LINK_DEV, CONFIG_LINK_PROD } = process.env;

export const tokens = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
};

export const getAccessToken = () => {
  const accessToken = Cookies.get(tokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken) => {
  Cookies.set(tokens.ACCESS_TOKEN, accessToken, {
    domain: NODE_ENV === "prod" ? CONFIG_LINK_PROD : CONFIG_LINK_DEV,
    sameSite: "strict",
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove(tokens.ACCESS_TOKEN);
};

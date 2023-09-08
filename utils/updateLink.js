import { formatOrder } from "./formatOrder";

export const updateLink = (filters) => {
  const link = new URLSearchParams({
    year: filters.year,
    type: filters.type,
    [`rating.kp`]: filters.rating,
  });

  if (filters.genre !== "") {
    link.append("genres.name", `${filters.genre}`);
  }

  link.append("sortField", "year");
  link.append("sortType", `${formatOrder(filters.order)}`);

  link.append("sortField", "premiere.world");
  link.append("sortType", `${formatOrder(filters.order)}`);

  return link.toString();
};

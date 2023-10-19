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
  link.append("sortType", `${filters.order}`);

  link.append("sortField", "premiere.world");
  link.append("sortType", `${filters.order}`);

  return link.toString();
};

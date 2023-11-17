export const updateLink = (filters) => {
  const link = new URLSearchParams({
    year: filters.year,
    type: filters.type,
    [`rating.kp`]: filters.rating,
  });

  if (filters.genre !== "") {
    link.append("genres.name", `${filters.genre}`);
  }

  const sortOptions = {
    recommended: { field: "votes.kp", type: "-1" },
    date: { field: "premiere.world", type: "-1" },
    rating: { field: "rating.kp", type: "-1" },
  };

  if (filters.order in sortOptions) {
    const { field, type } = sortOptions[filters.order];
    if (filters.order === "date") {
      link.append("sortField", "year");
      link.append("sortType", "-1");
    }
    link.append("sortField", field);
    link.append("sortType", type);
  }

  return link.toString();
};

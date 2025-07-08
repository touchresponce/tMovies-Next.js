const sortOptions = {
  recommended: { field: "votes.imdb", value: "-1" },
  date: { field: "premiere.world", value: "-1" },
  rating: { field: "rating.kp", value: "-1" },
};

export const updateLink = (filters) => {
  const link = new URLSearchParams();

  for (let key in filters) {
    if (key === "order") {
      const { field, value } = sortOptions[filters.order];
      if (filters.order[0] === "date") {
        link.append("sortField", "year");
        link.append("sortType", "-1");
      }
      link.append("sortField", field);
      link.append("sortType", value);
    } else if (key === "rating") {
      filters[key].forEach((value) => link.append("rating.kp", value));
    } else if (key === "genre") {
      filters[key].forEach((value) => link.append("genres.name", value));
    } else {
      filters[key].forEach((value) => link.append(key, value));
    }
  }

  return link.toString();
};

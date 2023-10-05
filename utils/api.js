/**
 * поиск с фильтрами
 */
export const getMovieByFilters = (link) => {
  return fetch(`/api/search`, {
    method: "POST",
    body: JSON.stringify(link),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

/**
 * Быстрый поиск
 */
export const getFastSearch = (query) => {
  return fetch(`/api/fast-search`, {
    method: "POST",
    body: JSON.stringify(query),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

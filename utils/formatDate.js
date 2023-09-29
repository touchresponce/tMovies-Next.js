/**
 * 1964-09-02T00:00:00.000Z => 2 сентября 1964 г.
 */
export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("ru-Ru", options);
}

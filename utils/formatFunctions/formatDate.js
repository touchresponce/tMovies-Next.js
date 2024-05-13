/**
 * 1964-09-02T00:00:00.000Z => 02.09.1964
 */
export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  return date.toLocaleDateString("ru-Ru", options).replace(" г.", "");
}

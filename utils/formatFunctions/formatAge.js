export default function formatAge(dateString) {
  const formatter = new Intl.NumberFormat("ru", {
    style: "unit",
    unit: "year",
    unitDisplay: "long",
  });

  return formatter.format(dateString);
}

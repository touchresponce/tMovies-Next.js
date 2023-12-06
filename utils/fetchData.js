export default async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
  });
  return response.json();
}

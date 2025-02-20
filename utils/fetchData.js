export default async function fetchData(url) {
  const response = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.KEY,
    },
    next: {
      revalidate: 86400, // 24h
    },
  });

  return response.json();
}

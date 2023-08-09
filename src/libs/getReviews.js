export async function getReviewsData(queryType, queryValue) {
  const res = await fetch(
    `http://localhost:3000/api/reviews?${queryType}=${queryValue}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

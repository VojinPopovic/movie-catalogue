export async function getReviewsData(queryType, queryValue) {
  const res = await fetch(
    `https://popular-movie-catalogue.vercel.app/api/reviews?${queryType}=${queryValue}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

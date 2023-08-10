export async function getReviewsData(queryType, queryValue) {
  try {
    const data = await fetch(
      `https://popular-movie-catalogue.vercel.app/api/reviews?${queryType}=${queryValue}`,
      { cache: "no-store" }
    );
    return data.text();
  } catch (error) {
    console.log("erroro");
  }
}
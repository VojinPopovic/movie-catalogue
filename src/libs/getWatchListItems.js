export async function getWatchListItems(queryType, queryValue) {
  try {
    const data = await fetch(
      `https://popular-movie-catalogue.vercel.app/api/watchlist?${queryType}=${queryValue}`,
      { cache: "no-store" }
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getWatchListItems(movieid) {
  try {
    const data = await fetch(
      `https://popular-movie-catalogue.vercel.app/api/watchlist?movieid=${movieid}`,
      { cache: "no-store" }
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
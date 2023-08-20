export async function postWatchlist(
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  useremail
) {
  try {
    await fetch(`/api/watchlist`, {
      method: "POST",
      body: JSON.stringify({
        id,
        poster_path,
        title,
        release_date,
        vote_average,
        useremail,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

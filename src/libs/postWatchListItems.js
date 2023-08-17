export async function postWatchlist(movieid, useremail) {
  try {
    await fetch(`/api/watchlist`, {
      method: "POST",
      body: JSON.stringify({
        movieid,
        useremail,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

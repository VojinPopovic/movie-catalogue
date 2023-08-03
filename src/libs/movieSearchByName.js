export async function getMovieBySearch(name, year) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_READ_ACCESS_TOKEN,
    },
  };
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US`,
      options
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

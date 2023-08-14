export async function getMovieBySearch(name) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_READ_ACCESS_TOKEN,
    },
  };
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

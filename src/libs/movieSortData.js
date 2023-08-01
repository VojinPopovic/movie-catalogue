export async function getData(searchType) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_READ_ACCESS_TOKEN,
    },
  };
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=${searchType}`,
      options
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
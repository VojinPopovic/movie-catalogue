import Image from "next/image";
import Link from "next/link";

// async function getData() {
//   try {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/157336?api_key=24a9b56e832ba35727898f2f1542bbed&append_to_response=videos"
//     );
//     return data.json();
//   } catch (err) {
//     console.log(err);
//   }
// }
async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGE5YjU2ZTgzMmJhMzU3Mjc4OThmMmYxNTQyYmJlZCIsInN1YiI6IjY0YzUyMjRlNDFhYWM0MGZiNzEzM2E5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C5BkGy4l24cLgskfwtKtLuUNjetcNUeVWJ5erG17Ygc",
    },
  };
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc",
      options
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const movies = await getData();
  console.log(movies.results);
  const content = movies.results.map((movie) => {
    const link = "https://image.tmdb.org/t/p/original/";
    return (
      <Image
        src={link + movie.poster_path}
        alt=""
        width={40}
        height={40}
      ></Image>
    );
  });
  return <>{content}</>;
}

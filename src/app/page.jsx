import MovieCard from "@/components/reusable/MovieCard";
async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_READ_ACCESS_TOKEN,
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
    return <MovieCard movie={movie} />;
  });
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-auto grid gap-5 lg:gap-10 sm:grid-cols-[318px_318px] lg:grid-cols-[318px_318px_318px] mx-auto">
          {content}
        </div>
      </div>
    </>
  );
}

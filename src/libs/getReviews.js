export async function getReviewsData(queryType, queryValue) {
  const res = await fetch(
    `https://popular-movie-catalogue.vercel.app/api/reviews?${queryType}=${queryValue}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
// "use client";

// import { useEffect, useState } from "react";

// export async function getReviewsData(queryType, queryValue) {
//   const [data, setData] = useState([]);
//   const [err, setErr] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//       const res = await fetch(
//         `http://localhost:3000/api/reviews?${queryType}=${queryValue}`,
//         { cache: "no-store" }
//       );

//       if (!res.ok) {
//         setErr(true);
//       }

//       const data = await res.json();

//       setData(data);
//       setIsLoading(false);
//     };
//     getData();
//   }, [queryType, queryValue]);
//   return data;
// }

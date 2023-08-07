export async function getReviewsData(queryParameter, queryValue) {
  try {
    const data = await fetch(
      `http://localhost:3000/api/reviews?${queryParameter}=${queryValue}`,
      {
        method: "GET",
        body: JSON.stringify({
          type: queryParameter,
        }),
      }
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

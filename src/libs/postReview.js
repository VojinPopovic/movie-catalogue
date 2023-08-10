export async function postReview(review, moviename, session) {
  try {
    await fetch(`https://popular-movie-catalogue.vercel.app/api/reviews`, {
      method: "POST",
      body: JSON.stringify({
        moviename,
        review,
        username: session.data.user.name,
        email: session.data.user.email,
        img: session.data.user.image,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

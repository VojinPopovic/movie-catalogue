export async function postReview(review, moviename, movieid, session) {
  try {
    await fetch(`/api/reviews`, {
      method: "POST",
      body: JSON.stringify({
        moviename,
        review,
        movieid,
        username: session.data.user.name,
        email: session.data.user.email,
        img: session.data.user.image,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

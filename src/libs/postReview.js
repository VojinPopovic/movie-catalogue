export async function postReview(review, moviename, movieid, session) {
  try {
    await fetch(`/api/reviews`, {
      method: "POST",
      body: JSON.stringify({
        moviename: moviename.includes("%3A")
          ? moviename.replaceAll("%3A", ":")
          : moviename,
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

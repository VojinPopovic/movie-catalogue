export async function createComment(commentContent, id, session) {
  let comment = commentContent;
  let userimage = session?.data?.user?.image;
  let commentmaker = session?.data?.user?.name;
  let commentmakeremail = session?.data?.user?.email;

  try {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        id,
        comment,
        userimage,
        commentmaker,
        commentmakeremail,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}

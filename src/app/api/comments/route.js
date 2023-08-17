import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Comment from "@/models/Comment";

export async function POST(request) {
  const body = await request.json();
  const newReview = new Comment(body);
  try {
    await connect();
    await newReview.save();
    return new NextResponse("post has been created", body, { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  try {
    await connect();

    const reviews = await Comment.find({id});
    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

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
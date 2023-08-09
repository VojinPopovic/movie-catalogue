import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Review from "@/models/Review";

export async function GET(request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const moviename = url.searchParams.get("moviename");

  if (email) {
    try {
      await connect();
      const reviews = await Review.find(email && { email });
      return new NextResponse(JSON.stringify(reviews), { status: 200 });
    } catch (err) {
      return new NextResponse({ status: 500 });
    }
  } else if (moviename) {
    try {
      await connect();
      const reviews = await Review.find(moviename && { moviename });
      return new NextResponse(JSON.stringify(reviews), { status: 200 });
    } catch (err) {
      return new NextResponse({ status: 500 });
    }
  }
}

export async function POST(request) {
  const body = await request.json();
  const newReview = new Review(body);
  try {
    await connect();
    await newReview.save();
    return new NextResponse("post has been created", body, { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
}

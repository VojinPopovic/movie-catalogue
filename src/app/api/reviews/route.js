import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Review from "@/models/Review";

export async function GET(request) {
  if (request.method === "GET" && request.body.type == "email") {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    try {
      await connect();
      const reviews = await Review.find(email && { email });
      return new NextResponse(JSON.stringify(reviews), { status: 200 });
    } catch (err) {
      return new NextResponse({ status: 500 });
    }
  } else if (request.method === "GET" && request.body.type == "moviename") {
    const url = new URL(request.url);
    const moviename = url.searchParams.get("moviename");

    try {
      await connect();
      const reviews = await Review.find(moviename && { moviename });
      return new NextResponse(JSON.stringify(reviews), { status: 200 });
    } catch (err) {
      return new NextResponse({ status: 500 });
    }
  } else {
    try {
      await connect();
      const reviews = Review.find();
      return new NextResponse(reviews, { status: 200 });
    } catch (error) {
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

import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Review from "@/models/Review";

export async function GET(request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const moviename = url.searchParams.get("moviename");

  try {
    await connect();

    let reviews;
    if (email) {
      reviews = await Review.find({ email });
    } else if (moviename) {
      reviews = await Review.find({ moviename });
    } else {
      return new NextResponse("Invalid parameters", { status: 400 });
    }

    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();
  const newReview = new Review(body);
  try {
    await connect();
    await newReview.save();
    return new NextResponse("post has been created", body, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
}

import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Watchlist from "@/models/Watchlist";

export async function POST(request) {
  const body = await request.json();
  const newWatchlistItem = new Watchlist(body);
  try {
    await connect();
    await newWatchlistItem.save();
    return new NextResponse("post has been created", body, { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
}

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("email");

  try {
    await connect();

    const reviews = await Watchlist.find({ email });
    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

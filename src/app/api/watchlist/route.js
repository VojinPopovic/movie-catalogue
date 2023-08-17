import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Watchlist from "@/models/Watchlist";

export async function GET(request) {
  const url = new URL(request.url);
  const movieid = url.searchParams.get("movieid");

  try {
    await connect();

    const watchlist = await Watchlist.find({ movieid });
    return new NextResponse(JSON.stringify(watchlist), { status: 200 });
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request) {
  const { movieid, useremail } = await request.json();

  try {
    await connect();

    await Watchlist.findOneAndUpdate(
      { movieid, useremail },
      { movieid, useremail },
      { upsert: true }
    );
    return new NextResponse("User has been created", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
}

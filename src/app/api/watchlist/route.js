import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Watchlist from "@/models/Watchlist";

export async function GET(request) {
  const url = new URL(request.url);
  const useremail = url.searchParams.get("useremail");
  const movieid = url.searchParams.get("movieid");

  try {
    await connect();

    let watchlist;
    if (useremail) {
      watchlist = await Watchlist.find({ useremail });
    } else if (movieid) {
      watchlist = await Watchlist.find({ movieid });
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

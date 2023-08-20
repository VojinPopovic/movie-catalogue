import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Watchlists from "@/models/Watchlist";

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const useremail = url.searchParams.get("useremail");

  try {
    await connect();

    let watchlist;
    if (id) {
      watchlist = await Watchlists.find({ id });
    } else if (useremail) {
      watchlist = await Watchlists.find({ useremail });
    } else {
      return new NextResponse("Invalid parameters", { status: 400 });
    }

    return new NextResponse(JSON.stringify(watchlist), { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request) {
  const { id, poster_path, title, release_date, vote_average, useremail } =
    await request.json();

  try {
    await connect();

    await Watchlists.findOneAndUpdate(
      { id, useremail },
      { id, useremail, poster_path, title, release_date, vote_average },
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

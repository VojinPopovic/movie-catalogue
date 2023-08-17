import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Watchlist from "@/models/Watchlist";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connect();
    await Watchlist.findByIdAndDelete(id);
    return new NextResponse("Deleted review", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database error", { status: 500 });
  }
}
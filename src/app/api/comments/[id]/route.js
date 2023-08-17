import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Comment from "@/models/Comment";

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connect();
    await Comment.findByIdAndDelete(id);
    return new NextResponse("Deleted review", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database error", { status: 500 });
  }
}
"use client";

import { useSession } from "next-auth/react";
import { postReview } from "@/libs/postReview";
import ReviewCard from "../reusable/ReviewCard";
import { useRouter } from "next/navigation";

export default function Review({ reviews, moviename, movieid }) {
  const session = useSession();
  const router = useRouter();
  function submitHandler(e) {
    e.preventDefault();
    postReview(e.target[0].value, moviename, movieid, session);
    e.target.reset();
    router.refresh();
  }

  return (
    <div className="mx-2 content:mx-0">
      <p className="accent_text_color mt-4 mb-2 text-2xl">Reviews</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <textarea
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 md:w-[500px] md:h-[100px]"
            placeholder="Write a review"
          />
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center justify-start px-12 py-2 overflow-hidden font-medium transition-all accent_color rounded-xl hover:bg-white group mt-3"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#ba00fc]">
            Post
          </span>
        </button>
      </form>
      <p className="mt-4 mb-2">Recent reviews from other users</p>
      {reviews
        ? reviews.map((review) => {
            return <ReviewCard key={review._id} review={review}></ReviewCard>;
          })
        : ""}
    </div>
  );
}

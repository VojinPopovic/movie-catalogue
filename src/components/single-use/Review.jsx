"use client";

import { useSession } from "next-auth/react";
import { postReview } from "@/libs/postReview";

export default function Review({ reviews, moviename }) {
  const session = useSession();
  function submitHandler(e) {
    e.preventDefault();
    postReview(e.target[0].value, moviename, session);
  }

  return (
    <div className="mx-2 content:mx-0">
      <p className="text-[#BA00FC] my-4 text-2xl">Reviews</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label className="leading-loose _text-color">Post a comment</label>
          <textarea
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 md:w-[500px] md:h-[100px]"
            placeholder="Comment"
          />
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center justify-start px-12 py-2 overflow-hidden font-medium transition-all _accent-color-bg rounded-xl hover:bg-white group mt-3"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-orange-500 ">
            Post
          </span>
        </button>
      </form>
      <p>{reviews !== undefined ? console.log(reviews) : console.log(reviews)}</p>
    </div>
  );
}

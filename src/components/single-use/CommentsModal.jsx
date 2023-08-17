"use client";

import Comment from "./Comment";
import { useState } from "react";
import { createComment } from "@/libs/createComment";
import useSWR from "swr";

export default function CommentsModal({ setIsModalOpen, id, session }) {
  function closeModal() {
    setIsModalOpen(false);
  }

  function makeComment(e) {
    e.preventDefault();
    createComment(e.target[0].value, id, session);
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, mutate } = useSWR(`/api/comments?id=${id}`, fetcher);
  console.log(id)
  const comments = data?.slice().reverse();

  function reloadData() {
    mutate();
  }

  return (
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 min-h-screen w-full main_color flex flex-col justify-center items-center z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[95%] sm:max-w-[600px]"
      >
        <div className="relative px-4 main_color shadow rounded-3xl max-h-[80vh] overflow-y-auto pb-2 sm:pb-10 border-2 border-white">
          <div className="mx-auto sm:px-5">
            <div className="mt-4 sm:mt-10 flex">
              <p className="accent_text_color text-2xl font-semibold mb-2 sm:mb-4">
                Comments
              </p>
            </div>
            <form onSubmit={makeComment}>
              <label className="leading-loose text-white">Post a comment</label>
              <textarea
                type="text"
                className="px-4 py-2 w-full sm:text-sm rounded-md text-gray-600"
                placeholder="Write something..."
              />
              <div className="flex items-center">
                <button
                  className="my-4 accent_color flex justify-center items-center w-full text-white px-4 py-3 rounded-md"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
            <div>
              {!isLoading ? (
                comments
                  ?.slice()
                  .reverse()
                  .map((postComment) => {
                    return (
                      <Comment
                        key={postComment._id}
                        post={postComment}
                        profileEmail={postComment.commentmaker}
                      />
                    );
                  })
              ) : (
                <p>Loading</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

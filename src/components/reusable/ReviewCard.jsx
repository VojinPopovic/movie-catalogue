"use client";

import Image from "next/image";
import Link from "next/link";
import CloseIcon from "../../../public/closeModal.svg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CommentsModal from "../single-use/CommentsModal";

export default function ReviewCard({ review }) {
  const router = useRouter();
  const session = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function deleteReviewHandler() {
    try {
      await fetch(`/api/reviews/${review._id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="relative border-white border-2 rounded-lg p-4 mb-3">
      <Link href={`/profile/${review.username}`}>
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full"
            src={review.img}
            height={50}
            width={50}
            alt=""
            placeholder="blur"
            blurDataURL={review.img}
          ></Image>
          <p className="text-lg">
            <span className="accent_text_color">@</span>
            {review.username}
          </p>
        </div>
      </Link>
      <p className="my-2">{review.review}</p>
      {session?.data?.user?.name === review.username ? (
        <Image
          onClick={deleteReviewHandler}
          className="absolute top-2 right-2 cursor-pointer"
          src={CloseIcon}
          width={15}
          height={15}
          alt=""
        ></Image>
      ) : (
        ""
      )}
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all accent_color rounded-xl hover:bg-white group"
      >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#ba00fc]">
          Comments
        </span>
      </button>
      {isModalOpen ? (
        <CommentsModal
          setIsModalOpen={setIsModalOpen}
          id={review._id}
          session={session}
        />
      ) : (
        ""
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import CloseIcon from "../../../public/closeModal.svg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ReviewCard({ review }) {
  const router = useRouter();
  const session = useSession();
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
      {/* <Link href={`/profile/${review.username}`}> */}
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
      {/* </Link> */}
      <p className="mt-2">{review.review}</p>
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
    </div>
  );
}

import { getReviewsData } from "@/libs/getReviews";
import ReviewCard from "@/components/reusable/ReviewCard";

export default async function Reviews({ params }) {
  const reviews = await getReviewsData(
    "email",
    params.id.replaceAll("%40", "@")
  );
  const content = reviews.map((review) => {
    return <ReviewCard key={review._id} review={review} />;
  });
  return (
    <div className="text-white max-w-[1048px] content:mx-auto pl-3">
      <p className="text-4xl my-5">Reviews</p>
      <div className="w-full max-w-[700px]">{reviews ? content : ""}</div>
    </div>
  );
}

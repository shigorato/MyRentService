import { Review } from "../../types/reviews";
import ReviewCard from "../review-form/review-form";

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({reviews  }: ReviewsListProps) {

  return (
    <ul className="reviews__list">
      {reviews.map((item) => (
    <ReviewCard
     key={item.id}
     id={item.id} 
     comment={item.comment} 
     date={item.date} 
     rating={item.rating} 
     name={item.user.name} 
     avatarUrl={item.user.avatarUrl} 
     isPro={item.user.isPro}
    />
))}
    </ul>
  );
}

export { ReviewsList };
import { useState } from "react";

type ReviewFormProps = {
  onSubmit: (review: { rating: number; comment: string }) => void;
};

function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <label
            key={star}
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title={`${star} stars`}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <svg width="37" height="33" viewBox="0 0 13 12" fill={star <= (hoveredRating || rating) ? "#bc6b01" : "gray"}>
  <path d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
</svg>

          </label>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="reviews__submit form__submit button" type="submit" disabled={!rating || comment.length < 50}>
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;

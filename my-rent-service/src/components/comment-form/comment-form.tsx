import { JSX } from "react";
import { useState, ChangeEvent, FormEvent } from "react";

type ReviewFormProps = {
  onSubmit: (review: { rating: number; comment: string }) => void;
};

function ReviewForm({ onSubmit }: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Обработчик изменения рейтинга
  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  // Обработчик изменения комментария
  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <input
            key={star}
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            checked={rating === star}
            onChange={handleRatingChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
      />
      <button className="reviews__submit form__submit button" type="submit" disabled={!rating || comment.length < 50}>
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
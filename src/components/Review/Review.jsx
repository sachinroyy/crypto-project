import { useState } from "react";

const Review = () => {
  // State for rating and feedback
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && rating <= 10 && feedback.trim() !== "") {
      setSubmitted(true);
    } else {
      alert("Please provide a valid rating between 1-10 and feedback message.");
    }
  };

  // Handle resetting form
  const handleReset = () => {
    setRating(0);
    setFeedback("");
    setSubmitted(false);
  };

  return (
    <div className="md:w-[50%] w-[100%] mt-[2rem] mb-[2rem] p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Give Your Review</h2>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Thank you for your review!</h3>
          <p>Your Rating: {rating} / 10</p>
          <p>Your Feedback: {feedback}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleReset}
          >
            Submit Another Review
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="rating"
              className="block text-lg font-semibold mb-2"
            >
              Rating (out of 10):
            </label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border border-gray-400 p-2 rounded-lg w-full"
              min="1"
              max="10"
              placeholder="Enter a rating between 1 and 10"
            />
          </div>
          <div>
            <label
              htmlFor="feedback"
              className="block text-lg font-semibold mb-2"
            >
              Improvement Feedback:
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="border border-gray-400 p-2 rounded-lg w-full"
              rows="4"
              placeholder="Write your feedback or suggestions..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default Review;

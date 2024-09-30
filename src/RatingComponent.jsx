import { useState } from 'react';

function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setSubmitted(true);
    } else {
      alert('Please select a rating before submitting!');
    }
  };

  return (
    <div className="w-full max-w-xs p-6 bg-gray-800 rounded-lg shadow-lg text-center">
      {!submitted ? (
        <>
          <h2 className="text-white text-2xl font-bold mb-2">How did we do?</h2>
          <p className="text-gray-400 text-sm mb-4">
            Please let us know how we did with your support request. Your feedback helps us improve!
          </p>
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`rating-number w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 ${
                  selectedRating === num ? 'bg-orange-500' : ''
                }`}
                onClick={() => handleRatingClick(num)}
              >
                {num}
              </span>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-full"
          >
            Submit
          </button>
        </>
      ) : (
        <div id="thank-you-card">
          <h2 className="text-white text-2xl font-bold mb-2">Thank you!</h2>
          <p className="text-gray-400 text-sm mb-4">
            We appreciate your feedback. You rated us{' '}
            <span className="text-orange-500 font-bold">{selectedRating}</span> out of 5.
          </p>
        </div>
      )}
    </div>
  );
}

export default RatingComponent;

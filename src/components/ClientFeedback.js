import React, { useState } from 'react';

function ClientFeedback() {
  const [feedback, setFeedback] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to submit feedback to the server
    setSubmittedFeedback(feedback);
    setFeedback('');
  };

  return (
    <div>
      <h2>Client Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
      {submittedFeedback && (
        <div>
          <h3>Thank you for your feedback!</h3>
          <p>{submittedFeedback}</p>
        </div>
      )}
    </div>
  );
}

export default ClientFeedback;

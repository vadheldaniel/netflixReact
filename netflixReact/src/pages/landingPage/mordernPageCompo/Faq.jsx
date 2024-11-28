import React, { useState } from "react";
import faqData from "../../../store/faqData";
import Q from "./Q";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null); // Tracks currently open question ID

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id); // Toggle or close the answer
  };

  return (
    <div className="que-ans">
      <div className="container w-full px-36 text-white">
        <div className="heading text-3xl font-bold py-5">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div>
          {/* Map through the questions from the store */}
          {faqData.map((q) => (
            <Q
              key={q.id} 
              que={q}
              isActive={activeQuestion === q.id} // Check if the question is currently active
              toggleAnswer={() => toggleAnswer(q.id)} // Pass the toggle function
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;

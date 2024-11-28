import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function Q({ que, isActive, toggleAnswer }) {
  return (
    <div className="que-ans-container font-semibold text-lg">
      {/* Question Box */}
      <div
        className="que-box flex justify-between p-5 rounded-xl bg-[rgba(255,255,255,0.1)] 
          items-center cursor-pointer hover:bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.1)] border"
        onClick={toggleAnswer} // Trigger toggle function from parent
      >
        <p>{que.question}</p>
        <button>
          {isActive ? <FiMinus style={{ fontSize: "30px" }} /> : <FiPlus style={{ fontSize: "30px" }} />}
        </button>
      </div>
      
      {/* Answer Box with Smooth Transition */}
      <div
        className={`ans rounded-xl bg-[rgba(255,255,255,0.1)] my-1 ${
          isActive ? "open" : "closed"
        }`}
      >
        {/* Only render content when active to avoid unnecessary rendering */}
        {isActive && <p>{que.answer}</p>}
      </div>
    </div>
  );
}

export default Q;

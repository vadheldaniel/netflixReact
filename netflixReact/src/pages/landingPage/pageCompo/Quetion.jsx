import { useRef, useState } from "react";




function Question({ question }) {

  const [toggle, setToggle] = useState(true);

  return (
    <div className="mt-2 text-white max-h-96">
      <div className="px-5 py-4 bg-[#313131] w-full hover:bg-[#414141]">
        <p className="inline-block text-xl">{question.question}</p>
        <button
          className="float-right"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? "+" : "x"}
        </button>
      </div>
      <div
        className={`ans  text-lg bg-[#313131] mt-[2px]  overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          toggle ? "max-h-0 opacity-0" : "max-h-fit p-5 opacity-100"
        }`}
      >
        {question.answer}
      </div>
    </div>
  );
}

export default Question;

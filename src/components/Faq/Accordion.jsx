import React from "react";

const Accordion = ({ title, answer, isOpen, onClick }) => {
  return (
    <div className="py-2">
      <button
        onClick={onClick}
        className={`flex justify-between w-full items-center ${
          isOpen ? "text-[#20b3ad]" : "text-[#80868B] hover:text-[#20b3ad]"
        }`}
      >
        <span className="font-satoshi text-xl font-medium flex text-left">
          {title}
        </span>

        <svg
          className={` shrink-0 ml-8 transform transition-transform duration-200 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path /*rounded arrow to not use reacts one since its too thin*/
            d="M6 10 L12 16 L18 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* <br></br> */}
      <div
        className={`rounded border-t-2 mt-2 transition-colors duration-200 ease-in-out ${
          isOpen
            ? "border-[#20b3ad]"
            : "border-[#DADCE0] hover:border-[#20b3ad]"
        }`}
      ></div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-900 text-lg font-light ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="flex overflow-hidden font-satoshi pt-2 leading-loose text-left">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

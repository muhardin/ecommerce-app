import React from "react";

const ModalUpdateProduct = () => {
  return (
    <div>
      <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
        <p data-tip="true" data-for="edit" className="text-xl">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </p>
      </button>
    </div>
  );
};

export default ModalUpdateProduct;

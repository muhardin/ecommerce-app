// components/Modal.tsx

import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-2 mb-20 md:mb-2">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-full h-full md:h-auto lg:m-44 rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">{children}</div>
        <div
          className="modal-close absolute top-0 right-0 -m-4 p-2 cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white" // Change text-white to the desired color
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;

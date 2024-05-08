import { useState } from "react";

interface Props {
  valModal: boolean;
  errMessage?: string[];
  modalToggle: (newValue: boolean) => void;
}

const ModalErrorComponent = ({ valModal, errMessage, modalToggle }: Props) => {
  const toggleValue = () => {
    modalToggle(!valModal);
  };
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div
        className={`relative z-10 ${!valModal ? "hidden" : ""} `}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed top-40 md:inset-0 z-10 w-screen overflow-y-auto">
          <div className="w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`animate-enter max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f01616"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-lg font-bold text-red-700">
                      Submit Fail !
                    </p>

                    <p className="mt-1 text-sm text-gray-500 flex flex-col justify-start">
                      <ul>
                        {errMessage?.length! > 0
                          ? errMessage?.map((item: string, index: any) => (
                              <div
                                className="flex justify-start"
                                key={item[index]}
                              >
                                <li className="text-md font-bold text-red-600 text-sm">
                                  - {item}
                                </li>
                              </div>
                            ))
                          : ""}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    toggleValue();
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalErrorComponent;

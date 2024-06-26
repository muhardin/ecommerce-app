import React from "react";

const LoadingComponent = () => {
  return (
    <>
      {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> */}
      <div
        className={`relative z-20 visible h-screen`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="w-full flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div className="w-full relative transform overflow-hidden rounded-lg bg-transparent text-left transition-all my-8 sm:max-w-lg">
              {/* content */}
              <div className="bg-transparent mx-auto flex justify-center py-12">
                <div className="relative">
                  <svg
                    width={180}
                    height={180}
                    viewBox="0 0 180 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M173.25 90C176.978 90 180.026 86.9733 179.747 83.2559C178.409 65.4488 171.797 48.3849 160.679 34.2815C148.163 18.4058 130.667 7.20597 111.01 2.48671C91.3529 -2.23255 70.6794 -0.196388 52.3206 8.26711C33.9619 16.7306 18.9872 31.1285 9.80942 49.1408C0.631678 67.1532 -2.21456 87.7309 1.72932 107.558C5.67321 127.385 16.1775 145.307 31.5497 158.437C46.9218 171.566 66.2665 179.137 86.4666 179.931C104.412 180.636 122.103 175.955 137.296 166.571C140.468 164.612 141.124 160.367 138.933 157.351C136.742 154.335 132.534 153.695 129.337 155.612C116.619 163.237 101.911 167.027 86.9966 166.441C69.8265 165.766 53.3835 159.331 40.3172 148.171C27.2509 137.011 18.3222 121.778 14.9699 104.924C11.6176 88.0712 14.0369 70.5802 21.838 55.2697C29.6391 39.9592 42.3676 27.721 57.9725 20.527C73.5775 13.3331 91.15 11.6023 107.859 15.6137C124.567 19.6251 139.439 29.1449 150.077 42.6393C159.317 54.3606 164.896 68.4875 166.202 83.2585C166.531 86.9719 169.522 90 173.25 90Z"
                      fill="#C7D2FE"
                    />
                  </svg>
                  <div className="absolute top-7 left-8 animate-spin">
                    <svg
                      width={119}
                      height={119}
                      viewBox="0 0 119 119"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.95 59.5C2.66391 59.5 -0.0308354 62.1706 0.297206 65.4402C1.34582 75.8918 5.14785 85.9181 11.3635 94.4732C18.7491 104.639 29.1633 112.205 41.1135 116.088C53.0637 119.971 65.9363 119.971 77.8865 116.088C89.8367 112.205 100.251 104.639 107.637 94.4732C115.022 84.3078 119 72.0652 119 59.5C119 46.9348 115.022 34.6922 107.636 24.5268C100.251 14.3613 89.8367 6.79498 77.8865 2.91213C67.8294 -0.355617 57.1189 -0.873278 46.8548 1.35917C43.6438 2.05756 41.9367 5.44566 42.9521 8.57092C43.9676 11.6962 47.3223 13.3669 50.5498 12.749C58.4035 11.2454 66.5436 11.739 74.2092 14.2297C83.7693 17.336 92.1007 23.3891 98.0092 31.5214C103.918 39.6538 107.1 49.4479 107.1 59.5C107.1 69.5521 103.918 79.3462 98.0092 87.4786C92.1007 95.6109 83.7694 101.664 74.2092 104.77C64.6491 107.877 54.3509 107.877 44.7908 104.77C35.2307 101.664 26.8993 95.6109 20.9908 87.4786C16.2532 80.9578 13.2683 73.3686 12.2714 65.4347C11.8617 62.1743 9.23609 59.5 5.95 59.5Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* end of content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;

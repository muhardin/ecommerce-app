"use client";
import { closeProfileMenu } from "@/redux/profileSlice";
import { FileInput, FileOutput } from "lucide-react";
import { useState } from "react";
import FormattedPrice from "../../FormattedPrice";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useUserData } from "../../supplier/UserData";
import useSWR from "swr";
import Withdraw from "./Withdraw";

const LayoutWallet = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const [valModal, setValModal] = useState<boolean>(false);
  const handleValueChange = (newValue: boolean) => {
    setValModal(newValue);
  };
  const userData = useUserData();

  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const url = process.env.SERVER_ENDPOINT + "/api/wallet/balance";
  const {
    data: balance,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  return (
    <div className="px-4 md:px-16 bg-white">
      <div className="sm:flex sm:items-stretch sm:justify-between flex-col sm:flex-col pt-4">
        <p className="flex-1 text-base font-bold text-gray-900">Latest List</p>
        {balance ? (
          <div className="flex flex-row justify-between gap-2 items-center mt-2 mb-2">
            <div className="flex flex-col gap-0">
              <span className="font-semibold capitalize">
                Hello{" "}
                {userData?.data?.first_name + " " + userData?.data?.last_name}
              </span>
              <span className="text-sm">Your available Balance</span>
            </div>
            <div className="">
              <span className="font-extrabold font-mono text-lg">
                <FormattedPrice amount={balance.balance} />
              </span>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div className="mt-2 sm:mt-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <label
                htmlFor=""
                className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
              >
                {" "}
                Sort by:{" "}
              </label>
              <select
                name=""
                className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
              >
                <option className="whitespace-no-wrap text-sm">Recent</option>
              </select>
            </div>

            {/* <button
          type="button"
          className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              className=""
            ></path>
          </svg>
          Export to CSV
        </button> */}
            <button
              onClick={() => {
                dispatch(closeProfileMenu());
                setValModal(true);
              }}
              type="button"
              className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
            >
              <FileInput className="w-4 h-4 mr-1" />
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-20">{children}</div>
      <Withdraw
        modalToggle={handleValueChange}
        valModal={valModal}
        balance={balance?.balance}
      />
      {/* Floating Button */}
      <div className="group fixed bottom-20 md:bottom-20 right-2 p-2  flex items-end justify-end w-24 h-24 ">
        <div className="cursor-pointer text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 group-hover:rotate-90  transition-all duration-[0.6s]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg> */}
          <FileOutput className="w-6 h-6 group-hover:rotate-90  transition-all duration-[0.6s]" />
        </div>

        <div className="cursor-pointer absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
            />
          </svg>
        </div>

        <div
          onClick={() => {
            setValModal(true);
          }}
          className="cursor-pointer absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-red-500 hover:bg-red-600  text-white"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
            />
          </svg> */}

          <FileInput className="w-5 h-5" />
        </div>

        <div className="cursor-pointer absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </div>
      </div>

      {/* <button
        title="Contact Sale"
        className="fixed z-90 bottom-28 right-8 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <FileOutput size={20} />
      </button> */}
    </div>
  );
};

export default LayoutWallet;

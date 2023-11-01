"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Wallet } from "../../../../../type";
import { formatDateAndTime } from "@/app/helpers";
import FormattedPrice from "../../FormattedPrice";
import { PictureInPicture, FileOutput, FileInput } from "lucide-react";
import ModalErrorComponent from "../../ui/ModalError";
import { useState } from "react";
import Withdraw from "./Withdraw";
import { useUserData } from "../../supplier/UserData";
import AddBankAccountForm from "./AddBankAccount";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { closeProfileMenu, toggleProfileMenu } from "@/redux/profileSlice";

const HistoryWalletComponent = ({ items }: { items?: any }) => {
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

  // console.log(balance);
  const [isAddBankAccountOpen, setAddBankAccountOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto mt-0 max-w-screen-lg px-2 w-full">
          {/* place menu add */}

          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >
                    Invoice
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Date
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Amount
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Status
                  </td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300">
                {items.map((item: Wallet) => (
                  <tr className="" key={item.id}>
                    <td
                      width="50%"
                      className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                    >
                      {item.description}
                      <div className="mt-1 lg:hidden">
                        <p className="font-normal text-gray-500">
                          {formatDateAndTime(item.created_at)}
                        </p>
                      </div>
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                      {formatDateAndTime(item.created_at)}
                    </td>

                    <td
                      className={`${
                        item.type == "Out" ? "text-red-600" : "text-green-600"
                      } whitespace-no-wrap py-4 px-6 text-right text-sm lg:text-left`}
                    >
                      <div className="flex flex-row gap-1 justify-end">
                        {item.type == "Out" ? <p>-</p> : <p>+</p>}
                        <FormattedPrice amount={item.amount} />
                      </div>
                      <div className="flex mt-1 ml-auto w-fit items-center rounded-full  py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                        {item.type == "Out" ? (
                          <FileInput className="text-red-600" />
                        ) : (
                          <FileOutput className="text-green-600" />
                        )}
                      </div>
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                      <div className="inline-flex items-center text-white">
                        {item.type == "Out" ? (
                          <FileInput className="text-red-600" />
                        ) : (
                          <FileOutput className="text-green-600" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryWalletComponent;

"use client";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { OrderItem, UserBank } from "../../../../../type";
import toast, { Toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useShopData } from "../../shop/ShopContext";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import FormattedPrice from "../../FormattedPrice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "@/redux/shoppingSlice";
import LoadingComponent from "../../ui/Loading";
import {
  closeProfileMenu,
  openProfileMenu,
  toggleProfileMenu,
} from "@/redux/profileSlice";
import { RootState } from "@/redux/store";
import { Landmark } from "lucide-react";
import Modal from "./Modal";
import AddBankAccountForm from "./AddBankAccount";
import CurrencyInput from "react-currency-input-field";

interface Props {
  valModal: boolean;
  balance: number;
  modalToggle: (newValue: boolean) => void;
}

const Withdraw = ({ valModal, modalToggle, balance }: Props) => {
  const toggleValue = () => {
    modalToggle(!valModal);
  };
  const { data: session } = useSession();
  const [modal, setModal] = useState(false);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  // console.log("Balance WD", balance);

  // console.log(selectedStatus);
  const [address, setAddress] = useState(false);
  function toggleAddress() {
    setAddress(!address);
  }

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        // setAddress(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/wallet/banks/user/top";
  const {
    data: object,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 6000,
  });

  const urlUserBank = process.env.SERVER_ENDPOINT + "/api/wallet/banks/user";
  const { data: userBanks } = useSWR(urlUserBank, fetcher, {
    refreshInterval: 3000,
  });
  const [selectedBank, setSelectedBank] = useState<any>(null);
  const handleSelectBank = (event: any) => {
    const value = event.target.value;
    setSelectedBank(value);
    toggleAddress();
  };

  const selectedDetailBank =
    process.env.SERVER_ENDPOINT +
    "/api/wallet/banks/user/detail/" +
    selectedBank;

  const { data: selectedBankDetail, error: addressError } = useSWR(
    selectedDetailBank,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );
  const [isAddBankAccountOpen, setAddBankAccountOpen] = useState(false);

  const [fee, setFee] = useState(10000);

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalReceived, setTotalReceived] = useState(0);
  const [valueAmount, setValueAmount] = useState(0);
  const [errorBalance, setErrorBalance] = useState(false);
  const [disable, setDisable] = useState(false);
  // Function to update the total amount when amount or fee changes
  const updateTotalAmount = (e: Number) => {
    setValueAmount(Number(e));
    const newTotalAmount = Number(e);
    const received = Number(e) - Number(fee);
    if (balance < newTotalAmount) {
      setErrorBalance(true);
    }
    if (balance > newTotalAmount) {
      setErrorBalance(false);
      setTotalAmount(newTotalAmount);
      setTotalReceived(received);
    }
  };

  const handleSubmitWithdrawal = async (e: SyntheticEvent) => {
    setDisable(true);
    setErrMessage([]);
    toast.loading("loading...");
    e.preventDefault();
    const formData = new FormData();
    formData.append("bank", selectedBankDetail.id ?? object.id);
    formData.append("amount", valueAmount.toString());

    try {
      const response = await axios.post(
        `${process.env.SERVER_ENDPOINT}/api/wallet/withdraw/post`, // Adjust the URL accordingly
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${session?.bearer}`, // Include the bearer token
          },
        }
      );

      if (response.status === 200) {
        toggleValue();
        toast.dismiss();
        toast.success("Withdrawal request submitted successfully", {
          duration: 3000,
        });
        // Handle any further actions after successful withdrawal submission
      }
      if (response.status === 201) {
        toast.dismiss();
        // console.log(response.data.message.error);
        setErrMessage(response.data.message.error);
      }
      setDisable(false);
    } catch (error) {
      toast.error("An error occurred while submitting the withdrawal request");
      // Handle errors
    }
  };
  // console.log(totalAmount);
  // console.log(object?.id);
  // console.log(selectedBankDetail?.id);
  // console.log(selectedBankDetail);
  // console.log(userBanks);
  // console.log(object);

  return (
    <div>
      <div className={`${loading ? "block" : "hidden"} fixed z-20`}>
        <LoadingComponent />
      </div>
      <div className={`text-sky-700 cursor-pointer hover:text-sky-500 `}></div>
      <div
        className={`relative z-10 ${
          valModal ? "visible" : "invisible"
        } overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none w-full`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        {/* <div className="fixed inset-0 z-10 w-full md:ml-[156px] overflow-y-auto mt-24 md:mt-0"> */}
        <div className="fixed inset-0 z-10 w-full overflow-y-auto mt-24 md:mt-0">
          <div className="w-full flex min-h-full items-center justify-center md:justify-center p-4 text-start sm:items-center sm:p-0">
            <div className="w-full relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-2/3 mb-14 md:mb-0">
              <div className="p-4  shadow-md text-gray-800 h-full">
                <div className="h-full">
                  <div className="grid sm:px-4 lg:grid-cols-1 p-4">
                    <div className="mb-6">
                      <span>Withdraw Form</span>
                    </div>
                    <form
                      onSubmit={() => {
                        // handleSubmitWithdrawal;
                      }}
                      className="w-full"
                    >
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="bg-white p-4 border border-gray-200 shadow-md w-full">
                          <div
                            className="flex flex-row justify-between relative w-full"
                            ref={ref}
                          >
                            <div className="flex flex-row gap-1">
                              <Landmark size={20} />
                              <span>Bank Tujuan</span>
                            </div>
                            <div className="">
                              <div
                                onClick={toggleAddress}
                                className="flex flex-row justify-end items-center"
                              >
                                <span className="text-sky-500 cursor-pointer hover:text-sky-600">
                                  Select Bank
                                </span>
                                <svg
                                  data-v-791e0ea7=""
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="#3a5fd6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="transition ico_drop_down_minor ml-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 7L10 14L15 7H5Z"
                                    fill="#3a5fd6"
                                    className="ico_drop_down_minor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div
                              className={`${
                                !address ? "hidden" : ""
                              } absolute flex flex-col gap-2 w-full md:w-2/3 right-0 top-0 mt-8 bg-white p-2 border border-gray-200 shadow-md justify-end`}
                            >
                              <div className="overflow-y-auto h-96">
                                {userBanks?.length > 0 ? (
                                  userBanks.map((item: UserBank) => (
                                    <div
                                      key={item.id}
                                      className="relative mt-1"
                                    >
                                      <input
                                        className="peer hidden"
                                        id={item.id.toString()}
                                        type="radio"
                                        name="radio"
                                        value={item.id}
                                        //   onSelect={handleOptionAddress}
                                        // checked={selectedAddress == address.id}
                                        onChange={handleSelectBank}
                                      />
                                      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                      <label
                                        className="peer-checked:border-2 peer-checked:border-sky-600 peer-checked:bg-sky-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
                                        htmlFor={item.id.toString()}
                                      >
                                        <Image
                                          width={95}
                                          height={95}
                                          className="w-14 object-contain"
                                          src="/images/avatar.png"
                                          alt=""
                                        />
                                        <div className="ml-5">
                                          <span className="mt-2 font-extrabold text-black">
                                            {item.bank_name}
                                          </span>
                                          <p className="text-slate-500 text-sm leading-6">
                                            {item.bank_account_name}
                                          </p>
                                          <p className="text-slate-500 text-sm leading-6">
                                            {item.bank_account_number}
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                  ))
                                ) : (
                                  <div>
                                    <span>No Address</span>
                                  </div>
                                )}
                              </div>

                              <div className="flex justify-end gap-2">
                                <Link href={"/myshop/profile/bank"}>
                                  <button className="rounded-md bg-sky-500 p-2 text-white hover:bg-sky-300">
                                    Manage Bank
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => {
                                    // toggleModal();
                                    // toggleAddress();
                                    setAddBankAccountOpen(true);
                                  }}
                                  className="rounded-md bg-sky-500 p-2 text-white  hover:bg-sky-300"
                                >
                                  Add Bank
                                </button>
                              </div>
                            </div>
                          </div>

                          {selectedBankDetail?.id ? (
                            <div className="flex flex-col ml-5">
                              <span className="font-bold mb-0">
                                {`${selectedBankDetail?.bank_name}`}
                              </span>
                              <span>{`${selectedBankDetail?.bank_account_name}`}</span>
                              <span>
                                {" "}
                                {`${selectedBankDetail?.bank_account_number}`}
                              </span>
                            </div>
                          ) : (
                            <>
                              {object?.id ? (
                                <div className="flex flex-col ml-5">
                                  <span className="font-bold mb-0">
                                    {`${object?.bank_name}`}
                                  </span>
                                  <span>{`${object?.bank_account_name}`}</span>
                                  <span>
                                    {" "}
                                    {`${object?.bank_account_number}`}
                                  </span>
                                </div>
                              ) : (
                                <div className="flex flex-col animate-pulse">
                                  <span className="font-bold  mb-2 ">
                                    No Bank Selected
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                          {errMessage.bank ? (
                            <span className="font-mono text-red-700 text-sm">
                              {errMessage.bank}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Amount
                          </label>
                          <CurrencyInput
                            name="amount"
                            onValueChange={(value, name) =>
                              updateTotalAmount(Number(value))
                            }
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            intlConfig={{ locale: "id", currency: "IDR" }}
                          />
                          {errorBalance ? (
                            <p className="text-red-600 text-xs">
                              Invalid balance
                            </p>
                          ) : null}
                          {errMessage.amount ? (
                            <span className="font-mono text-red-700 text-sm">
                              {errMessage.amount}
                            </span>
                          ) : null}
                          {/* <p className="text-gray-600 text-xs italic">
                            Input with number
                          </p> */}
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Fee
                          </label>
                          <CurrencyInput
                            readOnly
                            name="fee"
                            value={fee}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            intlConfig={{ locale: "id", currency: "IDR" }}
                          />

                          <p className="text-gray-600 text-xs italic">
                            Make it as long and as crazy as youd like
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Receiving Amount
                          </label>
                          <CurrencyInput
                            readOnly
                            name="received"
                            value={totalReceived}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            intlConfig={{ locale: "id", currency: "IDR" }}
                          />
                          <p className="text-gray-600 text-xs italic">
                            Make it as long and as crazy as youd like
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-city"
                          >
                            City
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Albuquerque"
                          />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-zip"
                          >
                            Zip
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                          />
                        </div>
                      </div> */}
                      <div className="flex flex-row justify-end mt-4 gap-4 items-center">
                        <button
                          type="button"
                          onClick={() => {
                            toggleValue();
                          }}
                          className="p-2 rounded-md text-white bg-red-400 cursor-pointer"
                        >
                          Close
                        </button>

                        <button
                          disabled={disable}
                          onClick={handleSubmitWithdrawal}
                          className="p-2 rounded-md text-white bg-sky-600 cursor-pointer disabled:bg-gray-500"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="flex flex-auto justify-end mt-4 gap-6 items-center mr-3">
                  <button
                    onClick={() => {
                      toggleValue();
                    }}
                    className="p-4 rounded-md text-white bg-sky-500 cursor-pointer"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isAddBankAccountOpen}
        onClose={() => setAddBankAccountOpen(false)}
      >
        <AddBankAccountForm onClose={() => setAddBankAccountOpen(false)} />
      </Modal>

      <Toaster />
    </div>
  );
};

export default Withdraw;

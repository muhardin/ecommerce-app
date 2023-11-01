import { SyntheticEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import Select from "react-tailwindcss-select";
import useSWR from "swr";
import { BankSelect, UserBank } from "../../../../../../type";
import { useUserData } from "@/app/components/supplier/UserData";

const UpdateBank = ({ item }: { item: UserBank }) => {
  const userData = useUserData();
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [modal, setModal] = useState(false);
  const [bankAccountName, setBankAccountName] = useState(
    item.bank_account_name
  );
  const [bankAccountNumber, setBankAccountNumber] = useState(
    item.bank_account_number
  );
  const [bankBranch, setBankBranch] = useState(item.branch);
  const handleAddBankAccount = () => {
    // Implement the logic to add the bank account, e.g., send a request to your API
    //   onClose(); // Close the modal after successful submission
  };
  const { data: session } = useSession();

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());

  const selectedDetailBank = process.env.SERVER_ENDPOINT + "/api/wallet/banks";
  const { data: bankList, error: bankError } = useSWR(
    selectedDetailBank,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  const [getBank, setBank] = useState<any>({
    value: item.bank_id,
    label: item.bank_name,
    disabled: false,
  });
  const [getBankVal, setBankVal] = useState(item.bank_id);
  const handleChange = (value: any) => {
    setBank(value);
    setBankVal(value.value);
  };
  console.log(getBank);
  const data = {
    bank: getBankVal,
    branch: bankBranch,
    bank_account_name: bankAccountName,
    bank_account_number: bankAccountNumber,
  };
  // console.log(getBankVal);
  // console.log(getBank);
  const headers = {
    Authorization: `Bearer ${session?.bearer}`,
  };
  const handleSubmit = async () => {
    setErrMessage([]);
    toast.loading("loading...");
    try {
      const response = await axios.post(
        `${process.env.SERVER_ENDPOINT}/api/wallet/banks/user/update/${item.id}`,
        data,
        {
          headers,
        }
      );

      if (response.status === 200) {
        toast.dismiss();
        toast.success("Bank added successfully");
        setModal(false);
        //   onClose();
        // console.log(response.data);
      }
      if (response.status === 201) {
        toast.dismiss();
        toast.error("Fail !");
        setErrMessage(response.data.message.error);
      }
      // You can handle the response here
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  console.log(item);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className="bg-sky-500 hover:bg-sky-400 p-2 text-white rounded-md"
        >
          Update
        </button>

        <div
          className={`relative z-10 ${
            modal ? "visible" : "invisible"
          } overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div>
                  <div className="p-6 text-black">
                    <div className="mb-4">
                      <label htmlFor="bankName">Bank Name</label>
                      <Select
                        primaryColor={"indigo"}
                        options={bankList}
                        value={getBank}
                        onChange={handleChange}
                        placeholder="Select a bank"
                        isSearchable
                      />
                      {errMessage?.id ? (
                        <label className="text-red-600 text-sm italic">
                          {errMessage?.bank}
                        </label>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="bankAccount">Bank Account Number</label>
                      <input
                        type="text"
                        id="bankAccount"
                        value={bankAccountNumber}
                        onChange={(e) =>
                          setBankAccountNumber(Number(e.target.value))
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      {errMessage?.bank_account_number ? (
                        <label className="text-red-600 text-sm italic">
                          {errMessage?.bank_account_number}
                        </label>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="accountName">Account Name</label>
                      <input
                        readOnly
                        type="text"
                        id="accountName"
                        value={bankAccountName}
                        onChange={(e) => setBankAccountName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="accountName">Bank Branch</label>
                      <input
                        type="text"
                        id="accountName"
                        value={bankBranch}
                        onChange={(e) => setBankBranch(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      {errMessage?.branch ? (
                        <label className="text-red-600 text-sm italic">
                          {errMessage?.branch}
                        </label>
                      ) : null}
                    </div>

                    <Toaster />
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        handleSubmit();
                      }}
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setModal(false);
                      }}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBank;

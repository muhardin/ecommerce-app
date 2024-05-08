// components/AddBankAccountForm.tsx
import React, { useState } from "react";
import Select from "react-tailwindcss-select";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { useUserData } from "../../supplier/UserData";
import toast, { Toaster } from "react-hot-toast";

const AddBankAccountForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const userData = useUserData();
  const [errMessage, setErrMessage]: any = useState<string[]>([]);

  const [bankAccountName, setBankAccountName] = useState(
    userData?.data?.first_name + " " + userData?.data?.last_name
  );
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const handleAddBankAccount = () => {
    // Implement the logic to add the bank account, e.g., send a request to your API
    onClose(); // Close the modal after successful submission
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

  const [getBank, setBank] = useState(null);
  const [getBankVal, setBankVal] = useState(null);

  const handleChange = (value: any) => {
    setBank(value);
    setBankVal(value.value);
  };

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
    toast.loading("loading...");
    try {
      const response = await axios.post(
        `${process.env.SERVER_ENDPOINT}/api/wallet/banks/user/add`,
        data,
        {
          headers,
        }
      );

      if (response.status === 200) {
        toast.dismiss();
        toast.success("Bank added successfully");
        onClose();
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
  return (
    <div>
      {/* <div className="mb-4">
        <label htmlFor="bankName">Bank Name</label>
        <input
          type="text"
          id="bankName"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div> */}
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
        {errMessage?.bank ? (
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
          onChange={(e) => setBankAccountNumber(e.target.value)}
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
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Bank Account
      </button>
      <Toaster />
    </div>
  );
};

export default AddBankAccountForm;

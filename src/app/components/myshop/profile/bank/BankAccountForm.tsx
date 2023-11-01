import React, { useState, useEffect } from "react";

interface BankData {
  id?: number;
  bankName?: string;
  accountNumber?: string;
}

interface BankAccountFormProps {
  bankData: BankData;
  onSubmit: (data: BankData) => void;
  onClose: () => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({
  bankData,
  onSubmit,
  onClose,
}) => {
  const [formData, setFormData] = useState<BankData>({ ...bankData });

  // Set up a mode to differentiate between "Add" and "Update"
  const isAddMode = bankData.id === undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-4">
      <h2>{isAddMode ? "Add Bank Account" : "Update Bank Account"}</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="bankName">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber || ""}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>{isAddMode ? "Add" : "Update"}</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default BankAccountForm;

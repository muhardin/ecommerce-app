"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StateProps } from "../../../type";
import { useDispatch, useSelector } from "react-redux";

interface Amount {
  amount: String;
}

const ConfirmActionModal = ({ amount }: Amount) => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-error btn-sm text-black" onClick={handleModal}>
        Delete
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure to ?</h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {}}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmActionModal;

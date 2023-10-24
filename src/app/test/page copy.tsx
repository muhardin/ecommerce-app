"use client";
import Image from "next/image";
import { useState } from "react";
interface SelectOption {
  id: number;
  label: string;
  value: string;
}

const TestPage = () => {
  const [selectOptions, setSelectOptions] = useState<SelectOption[]>([
    { id: 1, label: "Option 1", value: "3" },
    { id: 2, label: "Option 2", value: "5" },
    { id: 3, label: "Option 3", value: "7" },
  ]);

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    selectId: number
  ) => {
    const { value } = event.target;

    // Update the selected value for the specified select element
    setSelectOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === selectId ? { ...option, value } : option
      )
    );
  };
  return (
    <div className="container max-w-full p-10 flex ">
      {/* <div className="flex flex-col items-center">
        <p className="text-2xl font-bold font-sans">
          Muhardin <span className=" text-blue-600">Hasim</span>
        </p>
        <div className=" w-100">
          <Image
            className="rounded-lg w-full"
            src={"/images/profile/kid2.jpg"}
            alt="picture"
            width={500}
            height={500}
          />
        </div>
        <p className=" text-[24px] font-semibold font-serif">Belajar Bersama</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          provident temporibus quaerat ducimus doloremque magni voluptatum
          expedita at, sed, sequi nisi minima eveniet dolor ipsam possimus aut
          recusandae. Voluptatem asperiores neque amet totam omnis facere odit
          dignissimos consequatur nobis nisi dolor, voluptates harum earum
        </p>
        <button className=" bg-red-600 rounded-lg text-white p-4 mt-4">
          Subscribe The Channel
        </button>
      </div> */}
      <div>
        {selectOptions.map((option) => (
          <>
            <div key={option.id} className="flex flex-row gap-4 py-4">
              <label>{option.label}:</label>
              <select
                value={option.value}
                onChange={(e) => handleSelectChange(e, option.id)}
              >
                <option value="">Select an option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <label>{option.label}:</label>
              <select
                value={option.value}
                onChange={(e) => handleSelectChange(e, option.id)}
              >
                <option value="">Select an option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TestPage;

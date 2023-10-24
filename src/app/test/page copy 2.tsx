"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface SelectOption {
  id: number;
  label: string;
  value: string;
}

const TestPage = () => {
  const optionsArray: SelectOption[] = [
    { id: 1, label: "Option 1", value: "" },
    { id: 2, label: "Option 2", value: "" },
    { id: 3, label: "Option 3", value: "" },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>(
    optionsArray.map((option) => option.value)
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = event.target;

    const getD = await axios
      .get("http://127.0.0.1:8000/api/products/trending/get") // Replace with your API endpoint
      .then((response) => {
        setData(response.data); // Assuming the response is an array of data
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    setSelectedValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value; // Update the selected value at the specified index
      return updatedValues;
    });
  };

  console.log(data);
  return (
    <div>
      {optionsArray.map((option, index) => (
        <div key={option.id}>
          <label>{option.label}:</label>
          <select
            // value={selectedValues[index]}
            onChange={(e) => handleSelectChange(e, index)}
          >
            <option value="">Select an option</option>
            <option value="Value 1">Value 1</option>
            <option value="Value 2">Value 2</option>
            <option value="Value 3">Value 3</option>
          </select>

          {/* <select
            value={selectedValues[index]}
            // onChange={(e) => handleSelectChange(e, index)}
          >
            {data.map((item: any) => (
              <option key={item.id} value="">
                Select {item.title} {item.id}
              </option>
            ))}
            
          </select> */}
          <div>Selected Value: {selectedValues[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default TestPage;

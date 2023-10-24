"use client";
import axios from "axios";
import React, { useState } from "react";

interface SelectOption {
  id: number;
  label: string;
  value: string;
}
interface CourierData {
  rajaongkir: {
    results: {
      costs: string[]; // Define the structure of costs here
    };
  };
  results: string[];
  costs: string[];
}

const TestPage = () => {
  const optionsArray = ["Option 1", "Option 2", "Option 3"];

  const [selectedValues, setSelectedValues] = useState<string[]>(
    new Array(optionsArray.length).fill("")
  ); // Initialize selected values

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = event.target;
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  return (
    <div>
      {optionsArray.map((option, index) => (
        <div key={index}>
          <label>{option}:</label>
          <select
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(e, index)}
          >
            <option value="">Select an option</option>
            <option value="Value 1">Value 1</option>
            <option value="Value 2">Value 2</option>
            <option value="Value 3">Value 3</option>
          </select>
        </div>
      ))}
      <div>Selected Values: {selectedValues.join(", ")}</div>
    </div>
  );
};

export default TestPage;

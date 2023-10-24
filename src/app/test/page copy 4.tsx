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

  const [selectedValuesCost, setSelectedValuesCost] = useState<string[]>(
    new Array(optionsArray.length).fill("")
  ); // Initialize selected values

  const handleSelectChangeCost = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = event.target;
    const updatedValues = [...selectedValuesCost];
    console.log(value);
    updatedValues[index] = value;
    setSelectedValuesCost(updatedValues);
  };
  const sum = selectedValuesCost.reduce((accumulator, value) => {
    if (value) {
      return accumulator + parseFloat(value); // Assuming values can be converted to numbers
    }
    return accumulator;
  }, 0);
  console.log(sum);
  return (
    <div>
      {optionsArray.map((option, index) => (
        <div key={index}>
          <label>{option}:</label>
          <select
            value={selectedValuesCost[index]}
            onChange={(e) => handleSelectChangeCost(e, index)}
          >
            <option value="">Select an option</option>
            <option value="10">Value 1</option>
            <option value="20">Value 2</option>
            <option value="30">Value 3</option>
          </select>
        </div>
      ))}
      <div>Selected Values: {selectedValuesCost.join(", ")}</div>
    </div>
  );
};
export default TestPage;

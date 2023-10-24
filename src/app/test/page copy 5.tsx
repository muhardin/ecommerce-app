"use client";
import React, { useState, useEffect } from "react";

function MyComponent() {
  const optionsArray = ["Option 1", "Option 2", "Option 3"];

  const initialSelectedValues = optionsArray.map(() => "1"); // Initialize selected values array with default values

  const [selectedValuesCost, setSelectedValuesCost] = useState<string[]>(
    initialSelectedValues
  );
  const [sum, setSum] = useState(0);

  const handleSelectChangeCost = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = event.target;
    const updatedValuesCost = [...selectedValuesCost];
    updatedValuesCost[index] = value;
    setSelectedValuesCost(updatedValuesCost);
  };

  useEffect(() => {
    // Calculate the sum whenever selectedValues change
    const newSum = selectedValuesCost.reduce((accumulator, value) => {
      if (value) {
        return accumulator + parseFloat(value);
      }
      return accumulator;
    }, 0);
    setSum(newSum);
  }, [selectedValuesCost]);

  return (
    <div>
      {optionsArray.map((option, index) => (
        <div key={index}>
          <label>{option}:</label>
          <select
            value={selectedValuesCost[index]}
            onChange={(e) => handleSelectChangeCost(e, index)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      ))}
      <div>Selected Values: {selectedValuesCost.join(", ")}</div>
      <div>Sum of Selected Values: {sum}</div>
    </div>
  );
}

export default MyComponent;

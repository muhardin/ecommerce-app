"use client";
import React, { useState, useEffect } from "react";

function SelectArraySum() {
  const selectOptions: number[] = [10, 20, 30, 40, 50]; // Sample select options
  const [selectedValuesCost, setSelectedValuesCost] = useState<string[]>(
    selectOptions.map(String)
  );
  const [totalSum, setTotalSum] = useState<number>(0);

  // Use useEffect to calculate the initial total sum when the component is mounted
  useEffect(() => {
    const sum = selectedValuesCost.reduce((acc, currentValue) => {
      return acc + (parseInt(currentValue, 10) || 0);
    }, 0);
    setTotalSum(sum);
  }, [selectedValuesCost]);

  return (
    <div>
      {selectOptions.map((option, index) => (
        <div key={index}>
          <label>{`Option ${option}: `}</label>
          <select value={selectedValuesCost[index]}>
            {selectOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div>
        <p>Total Sum: {totalSum}</p>
      </div>
    </div>
  );
}

export default SelectArraySum;

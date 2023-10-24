"use client";
import React, { useState, useEffect } from "react";

function MyComponent() {
  const initialSelectedValues = ["option1", "option2", "option3"]; // Initial selected values
  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  const handleSelectChange = (event: any, index: any) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = event.target.value;
    setSelectedValues(updatedValues);
  };

  useEffect(() => {
    console.log("Selected Values:", selectedValues);
  }, [selectedValues]); // Use an empty dependency array to run the effect only once on mount

  return (
    <div>
      {selectedValues.map((value, index) => (
        <select
          key={index}
          value={value}
          onChange={(e) => handleSelectChange(e, index)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      ))}
    </div>
  );
}

export default MyComponent;

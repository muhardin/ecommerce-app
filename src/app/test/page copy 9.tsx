"use client";
import { useState, ChangeEvent } from "react";

export default function MyComponent() {
  const [selectedOption, setSelectedOption] = useState<string>(""); // Initialize with an empty string
  const [selectedOptionData, setSelectedOptionData] = useState<string>(""); // Initialize with an empty string

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionData(event.target.value);
    const selectedOption = event.target.selectedOptions[0]; // Get the selected option
    const extraData = selectedOption.getAttribute("data-extra-data"); // Get the value of data-extra-data

    setSelectedOption(extraData || ""); // Set the selected option's extra data
  };
  const jsonOutput = JSON.stringify({
    selectedOption,
    selectedOptionData,
  });
  console.log(jsonOutput);
  console.log(selectedOptionData);
  console.log(selectedOption);
  return (
    <div>
      <select onChange={handleSelectChange} value={selectedOption}>
        <option value="">Select an option</option>
        <option
          data-extra-data="data for option 1"
          label="Option 1"
          value={"option value 1"}
        >
          Option 1
        </option>
        <option
          data-extra-data="data for option 2"
          label="Option 2"
          value={"option value 2"}
        >
          Option 2
        </option>
      </select>

      {selectedOption && (
        <div>
          <p>Selected Option: {selectedOption}</p>
        </div>
      )}
    </div>
  );
}

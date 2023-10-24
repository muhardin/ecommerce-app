"use client";
import React from "react";

interface ChildComponentProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

function ChildComponent({ value, onValueChange }: ChildComponentProps) {
  const toggleValue = () => {
    onValueChange(!value);
  };

  return (
    <div>
      <h2>Value in Child: {value ? "True" : "False"}</h2>
      <button onClick={toggleValue}>Toggle Value</button>
    </div>
  );
}

export default ChildComponent;

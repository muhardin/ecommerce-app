"use client";
import React, { useRef } from "react";

const MyComponent: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const showDivById = (id: string) => {
    if (divRef.current) {
      divRef.current.style.display = "none"; // Hide any previously shown div
    }

    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.style.display = "block"; // Show the specified div
    }
  };

  return (
    <div>
      <button onClick={() => showDivById("div1")}>Show Div 1</button>
      <button onClick={() => showDivById("div2")}>Show Div 2</button>

      <div id="div1" style={{ display: "none" }}>
        {/* Content for div 1 */}
        This is div 1.
      </div>

      <div id="div2" style={{ display: "none" }}>
        {/* Content for div 2 */}
        This is div 2.
      </div>
    </div>
  );
};

export default MyComponent;

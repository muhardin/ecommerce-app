import React from "react";

const ExampleComponent = () => {
  return (
    <div className="flex space-x-4 space-x-reverse">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Swap Right
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Swap Left
      </button>
    </div>
  );
};

export default ExampleComponent;

import React from "react";

function SelectDate() {
  return (
    <>
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Select Lab Test & Pathology Lab
        </h2>
        <p className="text-gray-500 mt-2 text-base">
          Select a test to view available pathology labs near you
        </p>
      </header>
      <input type="date" name="" id=""
        className="bg-base-200 text-base-content border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary w-full"
      />
    </>
  );
}

export default SelectDate;

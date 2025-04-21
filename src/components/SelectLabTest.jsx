import React, { useState } from "react";
import Select from "./Select";

function SelectLabTest({setValue}) {
  const options = [
    "Full Body Checkup",
    "Blood Sugar Test",
    "Thyroid Profile",
    "CBC (Complete Blood Count)",
    "Vitamin D Test",
    "COVID-19 RT-PCR",
  ];

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      {/* Progress/Step Header */}
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Select Lab Test & Pathology Lab
        </h2>
        <p className="text-gray-500 mt-2 text-base">
          Select a test to view available pathology labs near you
        </p>
      </header>

      {/* Lab Test Selection */}
      <div className="mb-10 px-2 flex">
        <div className="w-full">
          <label
            htmlFor="test-select"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Select the lab test
          </label>
          {/* <Select options={options} setSelectedValue={setSelectedValue} /> */}
          <Select defaultValue="Pick a lab test" options={options} setSelectedValue={setSelectedValue}  />
        </div>
      </div>

      {/* Lab Cards Section */}
      {setValue(selectedValue)}
      {selectedValue && (
        <div className="flex flex-col gap-2 bg-white text-sm items-center">
          {/* Lab Card */}
          <label className="w-full">
            <input
              type="radio"
              name="lab"
              id="gourav"
              className="peer hidden"
            />
            <div className="border peer-checked:border-indigo-500 peer-checked:bg-indigo-50 border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                  Gourav pathology
                </h3>
                <span className="text-lg font-bold text-green-600">₹499</span>
              </div>
              <p className="text-gray-600 mb-1">📍 Nearby Ahmedpur Square</p>
              <p className="text-gray-600 mb-1">
                ⭐ Rating: 4.5 &#40; 230 reviews &#41;
              </p>
              <div className="flex justify-between">
                <p className="text-gray-600 mb-3">
                  ⏱️ Sample collection: 9 AM – 8 PM
                </p>
              </div>
            </div>
          </label>

          {/* <input type="radio" name="" id="gourav" className="peer" /> */}
          {/* Add more cards dynamically */}

          <label className="w-full">
            <input type="radio" name="lab" id="go" className="peer hidden" />
            <div className="border peer-checked:border-indigo-500 peer-checked:bg-indigo-50 border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                  Gourav pathology
                </h3>
                <span className="text-lg font-bold text-green-600">₹499</span>
              </div>
              <p className="text-gray-600 mb-1">📍 Nearby Ahmedpur Square</p>
              <p className="text-gray-600 mb-1">
                ⭐ Rating: 4.5 &#40; 230 reviews &#41;
              </p>
              <div className="flex justify-between">
                <p className="text-gray-600 mb-3">
                  ⏱️ Sample collection: 9 AM – 8 PM
                </p>
              </div>
            </div>
          </label>
        </div>
      )}
   </>
  );
}

export default SelectLabTest;

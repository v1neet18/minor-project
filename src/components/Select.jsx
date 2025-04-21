import React from "react";

function Select({ defaultValue, options, setSelectedValue = null  }) {
  return (
    <select
      defaultValue="Pick a lab test"
      onChange={(e) => setSelectedValue && setSelectedValue(e.target.value)}
      className="select w-full"
    >
      <option disabled={true}>{defaultValue}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;

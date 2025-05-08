import React from "react";

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="px-4 py-2 rounded-md focus:border-4 focus:border-blue-600"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

import React from "react";

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="px-4 py-2 rounded-md outline-none focus:border-4 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

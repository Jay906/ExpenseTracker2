import React from "react";

function Select({ title, options, value, handleChange }) {
  console.log(options, value);
  return (
    <>
      <label htmlFor="select">{title}</label>
      <select value={value} onChange={(e) => handleChange(e)}>
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;

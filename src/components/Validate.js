import React, { useState, useContext } from "react";
import { DataContext } from "./context";

function Validate({ confirmation }) {
  const [value, setValue] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        Please type, <mark>delete data</mark> if you want to remove everything
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="delete data"
        required={true}
        className="form-control"
      />
      <button
        type="button"
        className="form-control bg-primary"
        onClick={() => confirmation(value)}
      >
        Remove
      </button>
    </div>
  );
}

export default Validate;

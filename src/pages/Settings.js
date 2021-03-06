import React, { useContext, useState } from "react";
import { currencies } from "../components/services";
import { FaTrash } from "react-icons/fa";
import { DataContext } from "../components/context";
import Validate from "../components/Validate";

function Settings() {
  const [delToggle, setDelToggle] = useState(false);
  const { currency, changeSelect, deleteData } = useContext(DataContext);

  const confirmation = (value) => {
    if (value === "delete data") {
      setDelToggle(false);
      deleteData();
    }
    return false;
  };

  return (
    <div>
      <h3>Default currency</h3>
      <select
        className="form-control"
        value={currency}
        onChange={(e) => changeSelect(e)}
        name="currency"
      >
        {currencies.map((currency, index) => (
          <option value={currency.value} key={index}>
            {currency.title}
          </option>
        ))}
      </select>
      <div className="danger delete" onClick={() => setDelToggle(!delToggle)}>
        <h3>
          <div>
            <FaTrash />
          </div>
          <p>Delete data</p>
        </h3>
      </div>
      {delToggle && <Validate confirmation={confirmation} />}
    </div>
  );
}

export default Settings;

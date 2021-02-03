import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SingleItemContainer } from "../styled-component/styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { DataContext } from "../components/context";
import Form from "../components/Form";

function SinglePage() {
  const context = useContext(DataContext);
  const [value, setValue] = useState({ title: "", amount: "" });
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const { filterItems, deleteItem, editItem, currency } = context;
  const handleShow = () => {
    setShow(!show);
  };

  const resetValue = () => {
    setValue({ title: "", amount: "" });
  };

  const handleEdit = (id) => {
    const [item] = editItem(id);
    setShow(true);
    const tempObj = {
      title: item.desc,
      amount: item.amount,
      date: new Date(item.date),
      id: item.id,
    };
    setValue(tempObj);
    console.log(tempObj);
  };

  const _data = filterItems(id);
  if (_data.length !== 0) {
    const total = _data.reduce((acc, curr) => acc + curr.amount, 0);
    return (
      <SingleItemContainer>
        <div className="single-item-header center">
          <h2>
            Total: {currency}
            {total}
          </h2>
        </div>
        <div>
          {_data.map((elem) => (
            <div className="element-container" key={elem.id} id={elem.id}>
              <div className="element-item">
                <div>{elem.desc}</div>
                <div className="center">
                  {currency}
                  {elem.amount}
                </div>
                <div className="delete-input">
                  <button
                    className="button primary"
                    onClick={() => handleEdit(elem.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="button danger"
                    onClick={() => deleteItem(elem.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="empty-div"></div>
        </div>
        <Form
          id={id}
          value={value}
          show={show}
          handleShow={handleShow}
          resetValue={resetValue}
        />
      </SingleItemContainer>
    );
  }
  return (
    <div className="center" style={{ height: "100%" }}>
      Nothing added yet...
      <br />
      <Form
        id={id}
        value={value}
        show={show}
        handleShow={handleShow}
        resetValue={resetValue}
      />
    </div>
  );
}

export default SinglePage;

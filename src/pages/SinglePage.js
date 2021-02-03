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
  const handleEdit = (id) => {
    const [item] = editItem(id);
    setShow(true);
    setValue({ title: item.desc, amount: item.amount });
    console.log(item, value);
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
        <Form id={id} value={value} show={show} handleShow={handleShow} />
      </SingleItemContainer>
    );
  }
  return (
    <div>
      Oops empty page
      <br />
      <Form id={id} value={value} show={show} handleShow={handleShow} />
    </div>
  );
}

export default SinglePage;

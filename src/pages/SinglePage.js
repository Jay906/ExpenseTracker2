import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleItemContainer } from "../styled-component/styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { DataContext } from "../components/context";
import Form from "../components/Form";

function SinglePage() {
  const context = useContext(DataContext);
  const { id } = useParams();
  const { filterItems, deleteItem, editItem, currency } = context;

  // const handleEdit = (id) => {
  //   const [item] = editItem(id);
  //   setFormState({ title: item.desc, amount: item.amount });
  //   console.log(item, formState);
  // };

  const _data = filterItems(id);
  if (_data.length != 0) {
    const total = _data.reduce((acc, curr) => acc + curr.amount, 0);
    return (
      <SingleItemContainer>
        <div className="single-item-header center">
          <h2>
            Total: {currency.value}
            {total}
          </h2>
        </div>
        <div>
          {_data.map((elem) => (
            <div className="element-container" key={elem.id} id={elem.id}>
              <div className="element-item">
                <div>{elem.desc}</div>
                <div className="center">
                  {currency.value}
                  {elem.amount}
                </div>
                <div className="delete-input">
                  <button
                    className="button primary"
                    onClick={() => console.log(1)}
                    // onClick={() => handleEdit(elem.id)}
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
        <Form id={id} />
      </SingleItemContainer>
    );
  }
  return (
    <div>
      Oops empty page
      <br />
      <Form id={id} />
    </div>
  );
}

export default SinglePage;

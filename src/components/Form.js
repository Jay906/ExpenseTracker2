import React, { useState, useContext } from "react";
import { FormContainer } from "../styled-component/styled-components";
import { DataContext } from "./context";
import { useFormik } from "formik";
import uuid from "react-uuid";

const validate = (values) => {
  const errors = {};
  const numbers = /^[0-9]*\.?[0-9]*$/;
  if (!values.title) {
    errors.title = "* required";
  }

  if (!values.amount) {
    errors.amount = "* required";
  } else if (Number(values.amount) <= 0) {
    errors.amount = "only positive values";
  } else if (!numbers.test(values.amount)) {
    errors.amount = "only numbers";
  }

  return errors;
};

function Form({ id }) {
  const context = useContext(DataContext);
  const { onSubmit } = context;
  const formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
    },
    validate,
    onSubmit: (values) => {
      const newElement = {
        id: uuid(),
        desc: values.title,
        amount: Number(values.amount),
        date: new Date(),
        category: id,
      };
      onSubmit(newElement);
    },
  });

  const [state, setState] = useState(true);

  if (state) {
    return (
      <FormContainer show={state}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            className="form-control"
            value={formik.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="danger">{formik.errors.title}</div>
          )}
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Amount..."
            className="form-control"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          {formik.touched.amount && formik.errors.amount && (
            <div className="danger">{formik.errors.amount}</div>
          )}
          <button type="submit" className="bg-primary form-control">
            Submit
          </button>
        </form>
        <button className="x" onClick={() => setState(!state)}>
          x
        </button>
      </FormContainer>
    );
  }
  return (
    <button className="add" onClick={() => setState(!state)}>
      +
    </button>
  );
}

export default Form;

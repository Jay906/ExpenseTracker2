import { colors } from "./colors";
import styled from "styled-components";

const { mainColor, secondaryColor, mainWhite, bgDanger, bgSuccess } = colors;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 30vh;
  background: linear-gradient(90deg, ${mainColor}, ${secondaryColor});
  color: ${mainWhite};
  border-radius: 0 0 10px 10px;
  row-gap: 20px;
  position: relative;

  .banner {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(75px, 1fr));
    justify-content: center;
    align-content: center;
    background: linear-gradient(90deg, #476681, #365066);
    padding: 0.4rem;
  }
`;

export const Dashboard = styled.div`
  background: ${mainWhite};
  height: 60vh;
  padding-top: 1rem;
  position: relative;
  overflow-y: scroll;
`;

export const FlexTwoItems = styled.div`
  display: grid;
  height: 80%;
  width: 50%;
  margin: 7% auto;

  a {
    background: #fff;
    box-shadow: 1px 1px 4px #999;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 1rem;
    width: 80%;
    height: 80%;
  }

  .image {
    font-size: 2rem;
  }
`;

export const Menu = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-content: center;
  border: 1px solid #999;
  box-shadow: 0px -1px 4px #999;
  height: 10vh;

  div {
    font-size: 1.3rem;
    padding: 3px 0;
  }

  a {
    display: flex;
    flex-direction: column;
    color: ${mainColor};
    min-height: 100%;
    width: 100%;
    height: 10vh;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    background-color: #ccc;
  }

  .active {
    background-color: #ccc;
  }
`;

export const Expenses = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-content: center;
  row-gap: 1rem;
  padding: 1rem 0;
  height: 90%;

  .center {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #000;
    border: 1px solid #f4f4f4;
    width: 85%;
    height: 80px;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 1px 1px 4px #ccc;
    cursor: pointer;
    transition: all 0.4s;
  }

  .center:hover {
    background: #f4f4f4;
  }

  .image {
    font-size: 1.5rem;
    color: ${mainColor};
  }
`;

export const SingleItemContainer = styled.div`
  .single-item-header {
    margin-bottom: 7px;
    padding: 10px;
    background: #fff;
    box-shadow: 1px 1px 4px #999;
  }

  .element-container {
    margin-bottom: 4px;
    background: #fff;
    box-shadow: 1px 1px 4px #999;
    padding: 10px;
  }

  .element-container .element-item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  .element-container .delete-input {
    display: flex;
    justify-content: flex-end;
  }
  .delete {
    margin: 10px 0;
    padding: 10px 5px;
    border: 1px solid #ccc;
  }

  .delete h3 {
    display: grid;
    grid-template-columns: 13px 1fr;
    width: 95%;
    margin: auto;
    column-gap: 10px;
    align-items: center;
  }

  .delete-input .button {
    padding: 4px 4px;
    display: inline-block;
    margin-left: 10px;
    background: transparent;
    border: none;
    border: 1px solid;
    outline: none;
  }
`;

export const FormContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 180px;
  background: #fff;
  bottom: 10%;
  padding: 8px;

  button {
    margin-top: 5px;
    border: none;
  }

  button.x {
    position: absolute;
    top: -10px;
    right: 0;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background: ${mainColor};
    color: #f4f4f4;
  }

  input {
    background: #f4f4f4;
    border: none;
    outline: none;
    margin-bottom: 3px;
  }
`;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { cash } = useSelector((s) => s);
  const dispatch = useDispatch();
  const addMoney = (sun) => {
    dispatch({ type: "ADD_MONEY", payload: sun });
  };
  const takeMoney = (sun) => {
    dispatch({ type: "TAKE_MONEY", payload: sun });
  };

  return (
    <div className="header">
      <h1>Header</h1>
      <button onClick={() => addMoney(+prompt())}>+</button>
      <h1>{cash}</h1>
      <button onClick={() => takeMoney(+prompt())}>-</button>
    </div>
  );
};

export default Header;

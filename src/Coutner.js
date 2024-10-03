import logo from "./logo.svg";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";
import { configureStore } from "@reduxjs/toolkit";
import { useState, createContext, useContext } from "react";
const ContextCount = createContext();
function ComponentB() {
  const { setCounter } = useContext(ContextCount);
  function click() {
    setCounter((pre) => pre + 1);
  }
  return (
    <>
      <title>ComponentB</title>
      <button onClick={click}> button 1 </button>
    </>
  );
}
export default function Counter() {
  const [arrSquares, setArrSquares] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);
  let [count, setCounter] = useState(0);
  // const [title, setTitle] = useState("the curent turn is : X ");
  function addCount() {
    setCounter(count + 1);
  }
  return (
    <ContextCount.Provider value={{ setCounter }}>
      <h1>counter : {count}</h1>
      <div className="board-row"></div>
      <button onClick={addCount}> button 2 </button>
      <ComponentB />
    </ContextCount.Provider>
  );
}

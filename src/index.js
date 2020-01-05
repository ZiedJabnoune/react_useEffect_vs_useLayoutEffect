import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef();
  const refTwo = useRef();

  const handleClick = () => {
    ref.current.style.color = "red";
    refTwo.current.style.color = "green";
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("==> from useEffect");
    ref.current.style.color = "cyan";
  });

  useLayoutEffect(() => {
    console.log("==> from useLayoutEffect");
    refTwo.current.style.color = "blue";
  });

  return (
    <div className="App">
      <span>{count}</span>
      <h1 ref={ref}>useEffect</h1>
      <h1 ref={refTwo}>useLayoutEffect</h1>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

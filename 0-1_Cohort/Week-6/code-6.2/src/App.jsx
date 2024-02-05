/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";

import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [InputValue, setInputValue] = useState(0);

  //it will not Re-render whenever counter is called
  let count = useMemo(() => {
    console.log("Memo got called");
    let count = 0;
    for (let i = 0; i <= InputValue; i++) {
      count = count + i;
    }
  }, [InputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder="find sum from 1 to n "
      ></input>
      <br />
      Sum from 1 to {InputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;

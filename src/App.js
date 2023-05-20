//import useState
import { useState } from "react";
import "./App.css";
import { bootcampers } from "./bootcampers.js";

function App() {
  // component called count with initial state 0
  const [count, setCount] = useState(0);
  const [bootcamperIndex, setbootcamperIndex] = useState(0);

  function handleCounterClick() {
    setCount(count + 1);
    console.log(count);
  }

  function handleBootcamperClick() {
    //make bootcamperIndex between 0 - bootcamper Array length
    let randNum = Math.floor(Math.random() * bootcampers.length()); //random num
    setbootcamperIndex(randNum);
    console.log(randNum);
    console.log(bootcampers);
  }

  return (
    <main className="App">
      <h1>React useState</h1>
      <section>
        <h2 className="count"> {count} </h2>
        <button
          className="countButton"
          onClick={() => {
            handleCounterClick();
          }}
        >
          +1
        </button>
      </section>
      <section>
        <p className="randomBootcamper">BOOTCAMPER NAME</p>
        <button className="randomBootcamperName">
          Click me for a random bootcamper!
        </button>
      </section>
    </main>
  );
}

export default App;

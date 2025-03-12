import React from "react";
import { Calculator } from "./components/Calculator/Calculator";
import { Results } from "./components/Results/Results";
import "./App.css";

function App() {
  return (
    <div className="App" >
      <Calculator />
      <Results />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Lean Obregon</a>.
      </div>
    </div>
  );
}

export default App;

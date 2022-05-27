import React, { useState } from "react";
import "./index.css";
import { useInput } from "./hokks/useInput";

export default function App() {
  const [inputs, setInputs] = useInput({ name: "", age: "", email: "" });

  return (
    <div className="App">
      <h1>React Custom Component</h1>

      <h4>Twitter: @reactd qersleri</h4>

      <form>
        <label htmlFor="name">
          Name: <input name="name" value={inputs.name} onChange={setInputs} />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={setInputs} />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input name="email" value={inputs.email} onChange={setInputs} />
        </label>
      </form>
    </div>
  );
}

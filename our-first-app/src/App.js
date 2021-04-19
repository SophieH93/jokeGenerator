import useRandomJoke from "./useRandomJoke";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Sophie");
  const [lastName, setLastName] = useState("Hickey");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="Last Name" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>learning react hooks with typescript</h1>
      <p>This is going to be awesome!</p>
    </div>
  );
}

export default App;

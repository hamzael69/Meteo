import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import "./components/Weather.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="row">
        <div className="weather card blue-grey darken-1">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img
            src={`../image/image.png`}
            className="logo"
            alt="wolve image"
          />
        </a>
      </div>
      <h1>Hey Wolves, its alexia</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <p>
          a mini telegram{" "}

         app.
        </p>
      </div>
    </>
  );
}

export default App;


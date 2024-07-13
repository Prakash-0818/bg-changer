import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex flex-wrap justify-center bottom-12 gap-2 fixed px-2 inset-x-0 border-red-100">
        <div className="flex flex-wrap justify-center shadow-lg gap-2 px-3 py-2 rounded-3xl bg-white">
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg w-15"
            onClick={() => setColor("Red")}
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("Blue")}
            style={{ background: "Blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
            onClick={()=>setColor("Yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "violet" }}
            onClick={()=>setColor("violet")}
          >
            violet
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "purple" }}
            onClick={()=>setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
            style={{ background: "orange" }}
            onClick={()=>setColor("orange")}
          >
            orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

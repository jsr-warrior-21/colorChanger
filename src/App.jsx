import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div class="w-full bg-slate-700 fixed bottom-0.5 flex-wrap flex flex-row justify-between items-center p-3" >
        <button class=" red w-16 h-10 rounded-full bg-red-600 p-3  flex justify-center items-center border  " onClick={() => setColor("red")}>
          red
        </button>

        <button class=" bluew-16 h-10 rounded-full bg-blue-600 flex justify-center items-center p-3  border  " onClick={() => setColor("blue")}>
          blue
        </button>

        <button class=" green w-16 h-10 rounded-full bg-green-600 flex justify-center items-center border " onClick={() => setColor("green")}>
          green
        </button>

        <button class=" orange w-16 h-10 rounded-full  bg-orange-600 flex justify-center items-center border" onClick={() => setColor("orange")}>
          orange
        </button>

        <button class=" purple w-16 h-10 rounded-full bg-purple-700 flex justify-center items-center border " onClick={() => setColor("purple")}>
          purple
        </button>

        <button class=" pink w-16 h-10 rounded-full bg-pink-700 flex justify-center items-center border" onClick={() => setColor("pink")}>
          pink
        </button>

        <button class=" sky w-16 h-10 rounded-full bg-sky-500 flex justify-center items-center border " onClick={() => setColor("Aqua")}>
          sky
        </button>

      </div>


    </div>
  );
}

export default App;

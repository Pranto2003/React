import { useState } from "react";


function App() {
  const [color, setColor] = useState("maroon");

  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-2xl bg-white px-3 py-2 rounded-lg">
          <button onClick={()=>setColor("red")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "red" }}
            >
              Red
            </button>
            <button onClick={()=>setColor("green")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "green" }}
            >
              Green
            </button>
            <button onClick={()=>setColor("blue")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "blue" }}
            >
              Blue
            </button>
            <button onClick={()=>setColor("olive")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "olive" }}
            >
              Olive
            </button>
            <button onClick={()=>setColor("gray")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "gray" }}
            >
              Gray
            </button>
            <button onClick={()=>setColor("yellow")}
              className="outline-none px-4 py-1 rounded-2xl text-black border border-black"
              style={{ background: "yellow" }}
            >
              Yellow
            </button>
            <button onClick={()=>setColor("pink")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "pink" }}
            >
              Pink
            </button>
            <button onClick={()=>setColor("purple")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "purple" }}
            >
              Purple
            </button>
            <button onClick={()=>setColor("lavender")}
              className="outline-none px-4 py-1 rounded-2xl text-black border border-black"
              style={{ background: "lavender" }}
            >
              Lavender
            </button>
            <button onClick={()=>setColor("white")}
              className="outline-none px-4 py-1 rounded-2xl text-black border border-black"
              style={{ background: "white" }}
            >
              White
            </button>
            <button onClick={()=>setColor("black")}
              className="outline-none px-4 py-1 rounded-2xl text-white border border-black"
              style={{ background: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

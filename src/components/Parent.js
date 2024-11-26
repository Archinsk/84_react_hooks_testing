import { useState } from "react";

function Parent({ children }) {
  const [color, setColor] = useState("gold");

  console.log("Parent render");

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <div>Parent</div>
      <button
        onClick={() => {
          setColor(color === "gold" ? "orangered" : "gold");
          console.log(color);
        }}
      >
        change Parent state
      </button>
      <button
        onClick={() => {
          setColor(color === "gold" ? "gold" : "orangered");
          console.log(color);
        }}
      >
        set Parent state with same value
      </button>
      {children}
    </div>
  );
}

export default Parent;

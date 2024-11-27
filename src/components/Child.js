import { useState } from "react";
import "./Child.css";

function Child({ children }) {
  const setInitialBgHue = () => {
    console.log("set Child initial state bgHue");
    return 60;
  };
  const setInitialLightness = () => {
    console.log("set Child initial state lightness");
    return 0;
  };

  const [bgHue, setBgHue] = useState(setInitialBgHue);
  const [lightness, setLightness] = useState(setInitialLightness);
  const [key, setKey] = useState(0);

  const setUpdatedBgHue = () => {
    console.log("set Child updated state bgHue");
    setBgHue((b) => b + 15);
  };
  const setUpdatedLightness = () => {
    console.log("set Child updated state lightness");
    setLightness((l) => {
      if (l === 100) {
        return 0;
      } else {
        return l + 5;
      }
    });
  };
  const resetStates = () => {
    setKey(key + 1);
  };

  return (
    <div
      className="child"
      style={{
        backgroundColor: `hsl(${bgHue},75%,50%)`,
        color: `hsl(0,0%,${lightness}%)`,
      }}
      key={key}
    >
      <div>Child</div>
      <div>bgHue = {bgHue}</div>
      <div>lightness = {lightness}</div>
      <div>key = {key}</div>
      <button onClick={setUpdatedBgHue}>update Child state "bgHue"</button>
      <button onClick={setUpdatedLightness}>
        update Child state "lightness"
      </button>
      <button onClick={resetStates}>reset Child states</button>
      {children}
      {console.log("Child render")}
    </div>
  );
}

export default Child;

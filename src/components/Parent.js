import { useState } from "react";
import "./Parent.css";
import Child from "./Child";

function Parent({ generatedChildrenCount, children }) {
  const setInitialBgHue = () => {
    console.log("set Parent initial state bgHue");
    return 0;
  };
  const setInitialLightness = () => {
    console.log("set Parent initial state lightness");
    return 0;
  };

  const [bgHue, setBgHue] = useState(setInitialBgHue);
  const [lightness, setLightness] = useState(setInitialLightness);
  const [key, setKey] = useState(0);

  const setUpdatedBgHue = () => {
    console.log("set Parent updated state bgHue");
    setBgHue((b) => b + 15);
    console.log("Parent bgHue value before render - ", bgHue);
  };
  const setUpdatedLightness = () => {
    console.log("set Parent updated state lightness");
    setLightness((l) => {
      if (l === 100) {
        return 0;
      } else {
        return l + 5;
      }
    });
  };
  const setUpdatedBgHueSame = () => {
    console.log("set Parent updated state bgHue with same value");
    setBgHue(bgHue);
  };
  const hueUpdater = (b) => b + 15;
  const setUpdatedBgHueThreeTimes = () => {
    console.log("set Parent updated state bgHue tree times");
    setBgHue((b) => b + 15);
    setBgHue(hueUpdater);
    setBgHue((b) => b + 15);
  };
  const resetStates = () => {
    setKey(key + 1);
  };

  let generatedChildren;
  if (generatedChildrenCount) {
    const arr = Array.from(Array(generatedChildrenCount).keys());
    generatedChildren = arr.map((item, index) => <Child key={key + index} />);
  }

  return (
    <div
      className="parent"
      style={{
        backgroundColor: `hsl(${bgHue},75%,50%)`,
        color: `hsl(0,0%,${lightness}%)`,
      }}
      key={key}
    >
      <div className="mb">Parent</div>
      <div className="mb">
        <div>bgHue = {bgHue}</div>
        <div>lightness = {lightness}</div>
        <div>key = {key}</div>
        <div>generatedChildrenCount - {generatedChildrenCount}</div>
      </div>
      <div className="flex mb">
        <button onClick={setUpdatedBgHue}>update Parent state "bgHue"</button>
        <button onClick={setUpdatedLightness}>
          update Parent state "lightness"
        </button>
        <button onClick={setUpdatedBgHueSame}>
          update Parent state "bgHue" with same value
        </button>
        <button onClick={setUpdatedBgHueThreeTimes}>
          update Parent state "bgHue" three times
        </button>
        <button onClick={resetStates}>reset generatedChildren states</button>
      </div>
      <div className="flex">
        {generatedChildren}
        {children}
      </div>
      {console.log("Parent bgHue value after render - ", bgHue)}
      {console.log("Parent render")}
    </div>
  );
}

export default Parent;

import React, { useState } from "react";
import randomColor from "randomcolor";
function App() {
  const [color, setColor] = useState([]);
  const [palleteCount, setPalleteCount] = useState(1);
  const [colorFromat, setColorFormat] = useState("hex");
  const [luminosity, setLuminosity] = useState("random");
  const [hue, setHue] = useState("random");
  console.log('hello')
  const generateRandomColor = () => {
    setColor(
      randomColor({
        count: palleteCount,
        format: colorFromat,
        luminosity: luminosity,
        hue: hue,
      })
    );
    console.log(color);
  };

  return (
    <div className="App flex items-center justify-center w-full min-h-screen bg-black">
      <div className="header fixed top-0 w-full h-16 border-b-4 border-[yellow] bg-black px-16 flex items-center justify-between">
        <div className="counColorPallete flex items-center">
          <h1 className="text-white mr-2 font-bold text-lg">Pallets</h1>
          <select
            placeholder="select number"
            className="w-20 h-8 outline-none border-2 border-[yellow] bg-transparent text-white"
            onChange={(e) => {
              setPalleteCount(e.target.value);
            }}
          >
            <option
              value="1"
              className="text-white bg-black border-2 appearance-none"
            >
              1
            </option>
            <option
              value="2"
              className="text-white bg-black border-2 appearance-none"
            >
              2
            </option>
            <option
              value="3"
              className="text-white bg-black border-2 appearance-none"
            >
              3
            </option>
            <option
              value="4"
              className="text-white bg-black border-2 appearance-none"
            >
              4
            </option>
            <option
              value="5"
              className="text-white bg-black border-2 appearance-none"
            >
              5
            </option>
            <option
              value="6"
              className="text-white bg-black border-2 appearance-none"
            >
              6
            </option>
          </select>
        </div>
        <div className="counColorPallete flex items-center">
          <h1 className="text-white mr-2 font-bold text-lg">Hue</h1>
          <select
            placeholder="select number"
            className="w-20 h-8 outline-none border-2 border-[yellow] bg-transparent text-white"
            onChange={(e) => {
              setHue(e.target.value);
            }}
          >
            <option
              value="random"
              className="text-white bg-black border-2 appearance-none"
            >
              Random
            </option>
            <option
              value="red"
              className="text-white bg-black border-2 appearance-none"
            >
              Red
            </option>
            <option
              value="green"
              className="text-white bg-black border-2 appearance-none"
            >
              Green
            </option>
            <option
              value="yellow"
              className="text-white bg-black border-2 appearance-none"
            >
              Yellow
            </option>
            <option
              value="blue"
              className="text-white bg-black border-2 appearance-none"
            >
              Blue
            </option>
            <option
              value="orange"
              className="text-white bg-black border-2 appearance-none"
            >
              Orange
            </option>
            <option
              value="purple"
              className="text-white bg-black border-2 appearance-none"
            >
              Purple
            </option>
            <option
              value="pink"
              className="text-white bg-black border-2 appearance-none"
            >
              Pink
            </option>
            <option
              value="monochrome"
              className="text-white bg-black border-2 appearance-none"
            >
              Monochrome
            </option>
            <option
              value="light"
              className="text-white bg-black border-2 appearance-none"
            >
              Light
            </option>
          </select>
        </div>
        <div className="color-format flex items-center">
          <h1 className="text-white mr-2 font-bold text-lg">Color Format</h1>
          <select
            placeholder="select number"
            className="w-20 h-8 outline-none border-2 border-[yellow] bg-transparent text-white"
            onChange={(e) => {
              setColorFormat(e.target.value);
            }}
          >
            <option
              value="hex"
              className="text-white bg-black border-2 appearance-none"
            >
              hex
            </option>
            <option
              value="rgba"
              className="text-white bg-black border-2 appearance-none"
            >
              rgba
            </option>
            <option
              value="rgb"
              className="text-white bg-black border-2 appearance-none"
            >
              rgb
            </option>
          </select>
        </div>
        <div className="color-format flex items-center">
          <h1 className="text-white mr-2 font-bold text-lg">Luminosity</h1>
          <select
            placeholder="select number"
            className="w-20 h-8 outline-none border-2 border-[yellow] bg-transparent text-white"
            onChange={(e) => {
              setLuminosity(e.target.value);
            }}
          >
            <option
              value=""
              className="text-white bg-black border-2 appearance-none"
            >
              Default
            </option>
            <option
              value="dark"
              className="text-white bg-black border-2 appearance-none"
            >
              dark
            </option>
            <option
              value="white"
              className="text-white bg-black border-2 appearance-none"
            >
              white
            </option>
          </select>
        </div>

        <div className="button text-white">
          <button
            className="border-2 border-white px-8 py-2 font-bold rounded"
            onClick={generateRandomColor}
          >
            Click
          </button>
        </div>
      </div>
      {color.map((mainColor, key) => (
        <div
          key={key}
          className="mx-2 group coloPallete border-2 border-[yellow] rounded p-2 flex flex-col items-center w-46"
        >
          <div
            className=" color bg-red-500 w-full h-44 rounded mb-2 grid place-items-center p-2"
            style={{ background: mainColor }}
          >
            <h1 className="font-bold opacity-0 text-2xl transform scale-75 transition-all group-hover:scale-100 group-hover:opacity-100 ">
              Click to Copy
            </h1>
          </div>
          <div className="colorcode text-white uppercase">{mainColor}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

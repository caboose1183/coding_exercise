import { useState } from "react";
import "../stylesheeets/text.css"

export default function TextField({ boxNumber }) {
  const [input, setInput] = useState(localStorage.getItem(boxNumber || null));

  const handleTextChange = function (event) {
    const value = event.target.value;
    setInput(value);
    localStorage.setItem(boxNumber, value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name={boxNumber}
          value={input}
          onChange={handleTextChange}
        ></input>
      </form>
      <br></br>
    </>
  );
}

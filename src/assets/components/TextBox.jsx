import { useState } from "react";

export default function TextBox(props) {
  const [input, setInput] = useState(
    localStorage.getItem(props.boxNumber || null)
  );

  const handleTextChange = function (event) {
    const value = event.target.value;
    setInput(value);
    localStorage.setItem(props.boxNumber, value);
  };

  return (
    <div className="text-box">
      <article className="text-title">Text Title</article>
      <article className="text-body">
        <form>
          <input
            type="text"
            name={props.boxNumber}
            value={input}
            onChange={handleTextChange}
          ></input>
        </form>
      </article>
      <article className="text-footer"></article>
    </div>
  );
}

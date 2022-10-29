import { useState } from "react";

export default function TextBox() {
  const [text, setText] = useState({});
  const handleTextChange = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    setText(values => ({...values, [name]: value}))
  };

  return (
    <div className="text-box">
      <article className="text-title">Text Title</article>
      <article className="text-body">
    <form>
      <input type="text"
      name="textbox1"
      value={text.name}
      onChange={handleTextChange}
      >
      </input>
    </form>

      </article>
      <article className="text-footer"></article>
    </div>
  );
}

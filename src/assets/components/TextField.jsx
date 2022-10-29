import { useState } from "react";
import "../stylesheeets/text.css";

export default function TextField({ boxNumber, cannedText }) {
  const [input, setInput] = useState(localStorage.getItem(boxNumber) || null);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = function (event) {
    const value = event.target.value;
    setInput(value);
    localStorage.setItem(boxNumber, value);
  };

  const editButton = function () {
    if (isEditing === true) {
      setIsEditing(!isEditing);
    } else {
      setIsEditing(!isEditing);
    }
  };

  return (
    <>
      {isEditing ? (
        <form>
          <input
            type="text"
            name={boxNumber}
            value={input}
            onChange={handleTextChange}
          ></input>
          <br></br>
          <button onClick={editButton}>{isEditing ? "Done" : "Edit"}</button>
        </form>
      ) : (
        <p>
          {input ? input : cannedText}
          <button onClick={editButton}>{isEditing ? "Done" : "Edit"}</button>
        </p>
      )}

      <br></br>
    </>
  );
}

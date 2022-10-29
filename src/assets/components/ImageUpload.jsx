import { useState, useRef, useEffect } from "react";
import "../stylesheeets/images.css";
import upload from "../symbols/uploadIndicator.png";

export default function ImageUpload() {
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(localStorage.getItem("image"));

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        localStorage.setItem("image", reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(localStorage.getItem("image"));
    }
  }, [image]);

  return (
    <section className="image-container">
      <form>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/png, image/jpeg"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        ></input>
      </form>
      <article
        className="image-upload"
        onClick={(event) => {
          event.preventDefault();
          fileInputRef.current.click();
        }}
      >
        {preview ? (
          <img src={preview} style={{ width: "100%" }}></img>
        ) : (
          <>
            <img
              src={upload}
              alt="upload"
            ></img>
            <h3>PNG, JPEG files only</h3>
          </>
        )}
      </article>
    </section>
  );
}

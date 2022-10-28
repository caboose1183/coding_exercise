import { useState, useRef, useEffect } from "react";
import "./App.css";
import "./assets/symbols/uploadIndicator.png";

function App() {
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className="main-container">
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
            <img src={preview} style={{ width: '100%'}}></img>
          ) : (
            <>
              <img
                src="src/assets/symbols/uploadIndicator.png"
                alt="upload"
              ></img>
              <h3>PNG, JPEG files only</h3>
            </>
          )}
        </article>
      </section>

      <section className="text-boxes">
        <form>
          <input type="file" style={{ display: "none" }}></input>
        </form>
      </section>
    </div>
  );
}

export default App;

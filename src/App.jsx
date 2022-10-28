import { useState, useRef, useEffect } from "react";
import "./App.css";
import ImageUpload from "./assets/components/ImageUpload";
import "./assets/symbols/uploadIndicator.png";

function App() {
  // Image upload hooks section
  const fileInputRef = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(localStorage.getItem("image"));

  // Text edit hook section


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
    <div className="main-container">
      <ImageUpload
        fileInputRef={fileInputRef}
        setImage={setImage}
        preview={preview}
      />

      <section className="text-container">
        <div className="text-box">
          <article className="text-title">Text Title</article>
          <article className="text-body"></article>
        </div>
      </section>
    </div>
  );
}

export default App;

import { useState, useRef, useEffect } from "react";
import "./App.css";
import "./assets/symbols/uploadIndicator.png";

import ImageUpload from "./assets/components/ImageUpload";
import TextBox from "./assets/components/TextBox";

function App() {
  // Image upload hooks section
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
    <div className="main-container">
      <ImageUpload
        fileInputRef={fileInputRef}
        setImage={setImage}
        preview={preview}
      />

      <section className="text-container">
        <TextBox textBoxes={["box1", "box2", "box3"]} />
        <TextBox textBoxes={["box4", "box5", "box6"]} />
      </section>
    </div>
  );
}

export default App;

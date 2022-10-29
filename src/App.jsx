import "./App.css";

import ImageUpload from "./assets/components/ImageUpload";
import TextBox from "./assets/components/TextBox";

function App() {
  return (
    <div className="main-container">
      <ImageUpload />

      <section className="text-container">
        <TextBox
          textBoxes={["box1", "box2", "box3"]}
          cannedText={[
            "A simple black dress for women who want to go out on the town",
            "Made by award winning fashion designer Tim Smith",
            "Available in S, M, L, XL",
          ]}
        />
        <TextBox
          textBoxes={["box4", "box5", "box6"]}
          cannedText={[
            "Made with delicate and exotic fabrics from Italy",
            "Limited edition dress! Only 100 available!",
            "For just $45!",
          ]}
        />
      </section>
    </div>
  );
}

export default App;

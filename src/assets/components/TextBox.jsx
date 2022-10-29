import TextField from "./TextField";

export default function TextBox({ textBoxes, cannedText }) {
  return (
    <div className="text-box">
      <article className="text-title">Text Box</article>
      <article className="text-body">
        <TextField boxNumber={textBoxes[0]} cannedText={cannedText[0]}/>
        <TextField boxNumber={textBoxes[1]} cannedText={cannedText[1]}/>
        <TextField boxNumber={textBoxes[2]} cannedText={cannedText[2]}/>
      </article>
      <article className="text-footer"></article>
    </div>
  );
}

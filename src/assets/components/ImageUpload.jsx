export default function ImageUpload({fileInputRef, setImage, preview}) {

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
              src="src/assets/symbols/uploadIndicator.png"
              alt="upload"
            ></img>
            <h3>PNG, JPEG files only</h3>
          </>
        )}
      </article>
    </section>
  );
}

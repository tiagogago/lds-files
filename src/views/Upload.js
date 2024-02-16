import { useState } from "react";
import "../css/upload.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

function Upload() {
  const [image, setImage] = useState(null);
  const [fileName, setFilName] = useState("No selected file");
  return (
    <main>
      <form onClick={() => document.querySelector(".input-field").click()}>
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={({ target: { files } }) => {
            file[0] && setFilName(file[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browser Files to upload</p>
          </>
        )}
      </form>
      <section className="upload-row">
        <AiFillFileImage color="#1475cf" />
        <span className="upload-content">
          {fileName} -
          <MdDelete
            onClick={() => {
              setFilName("No selected File");
              setImage(null);
            }}
          />
        </span>
      </section>
    </main>
  );
}

export default Upload;

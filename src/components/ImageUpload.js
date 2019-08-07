import React from "react";
import axios from "axios";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

function ImageUpload({ url, onChange }) {
  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);
    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    onChange(response.data.url);
  }

  return (
    <div>
      <h4>Photo</h4>
      {url ? (
        <img src={url} alt="" style={{ width: "100%", height: "auto" }} />
      ) : (
        <input type="file" name="file" onChange={upload} />
      )}
    </div>
  );
}

export default ImageUpload;

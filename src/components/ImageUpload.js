import React from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
const Label = styled.label`
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block;
  padding: 5px;
  width: 310px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0776b8;
  opacity: 0.6;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 15px;
  box-shadow: 2px 8px 8px -3px rgba(214, 211, 214, 1);
`;
const AddPhotoLogo = styled.div`
  margin-left: 5px;
`;

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
      {url ? (
        <img src={url} alt="" style={{ width: "310px", height: "auto" }} />
      ) : (
        <>
          <Input type="file" id="file" name="file" onChange={upload} />
          <Label htmlFor="file">
            +{" "}
            <AddPhotoLogo>
              <i className="fas fa-camera" />
            </AddPhotoLogo>
          </Label>
        </>
      )}
    </div>
  );
}
ImageUpload.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ImageUpload;

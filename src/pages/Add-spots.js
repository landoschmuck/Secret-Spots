import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ImageUpload from "../components/ImageUpload";
import AddSpotMap from "../components/AddSpotMap";
import {
  MapButton,
  ModalDialog,
  Blur,
  FormContainer,
  StyledError,
  Form,
  Title,
  Text,
  Tags,
  ButtonGroup
} from "./add-spots/components";

function AddSpots({
  history,
  onCreate,
  url,
  newLocation,
  spots,
  onSetLocation,
  center,
  handleSetLocation,
  userLocation,
  width,
  height,
  ...props
}) {
  const [formValue, setFormValue] = React.useState({
    title: "",
    text: "",
    tags: "",
    bookmarked: "false"
  });
  const [errors, setErrors] = React.useState({});
  const [image, setImage] = React.useState("");
  const [showMap, setShowMap] = React.useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleImageChange(url) {
    setImage(url);
  }

  function validate() {
    const errors = {};
    if (formValue.title.trim() === "") {
      errors.title = "Bitte gebe einen Title ein";
    }

    if (formValue.text.trim() === "") {
      errors.text = "Bitte gebe einen Text ein";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleClick() {
    setShowMap(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const errors = validate();
    if (errors) {
      setErrors(errors);
      return;
    }
    const tags =
      formValue.tags && formValue.tags.split(",").map(tag => tag.trim());

    const spot = {
      title: formValue.title,
      headImg: image,
      text: formValue.text,
      tags,
      bookmarked: formValue.bookmarked,
      location: newLocation
    };

    onCreate(spot);
    history.replace("/secret-spots");
  }

  function handleOkClick() {
    setShowMap(false);
  }

  return (
    <>
      <Header title="Add New Spots" icon="fa-plus-circle" />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <ImageUpload
            name="headImg"
            url={image}
            onChange={handleImageChange}
          />
          <Title
            name="title"
            placeholder="Title"
            value={formValue.title}
            onChange={handleChange}
          />
          {errors.title && <StyledError>{errors.title}</StyledError>}
          <Text
            name="text"
            placeholder="Text"
            value={formValue.text}
            onChange={handleChange}
          />
          {errors.text && <StyledError>{errors.text}</StyledError>}
          <Tags
            name="tags"
            placeholder="Tags"
            value={formValue.tags}
            onChange={handleChange}
          />

          {/* <TagContainer>{tags.map(tags => renderCard(card))}</TagContainer> */}
          <ButtonGroup>
            <Button>Submit</Button>
            <Button type="Button" onClick={handleClick}>
              Location?
            </Button>
          </ButtonGroup>
        </Form>
      </FormContainer>

      {showMap && (
        <Blur>
          <ModalDialog>
            <AddSpotMap
              {...props}
              spots={spots}
              onSetLocation={handleSetLocation}
              center={userLocation}
              height="124%"
              width="100%"
            />
            <MapButton onClick={handleOkClick}>OK</MapButton>
          </ModalDialog>
        </Blur>
      )}
    </>
  );
}

export default AddSpots;

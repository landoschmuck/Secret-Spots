import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import AddSpotMap from "../../components/AddSpotMap";
import styled from "styled-components";
import FooterNavigation from "../../components/Footer";
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
  ButtonGroup,
  LandosFavoriteDiv
} from "./components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 80px;
`;

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
    history.replace("/secretSpots");
  }

  function handleOkClick() {
    setShowMap(false);
  }

  return (
    <>
      <Grid>
        <Header title="Add New Spots" icon="fa-plus-circle" />
        <LandosFavoriteDiv>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <ImageUpload
                name="headImg"
                url={image}
                onChange={handleImageChange}
              />
              <Title
                name="title"
                placeholder="Wie heißt dein Spot?"
                value={formValue.title}
                onChange={handleChange}
              />
              {errors.title && <StyledError>{errors.title}</StyledError>}
              <Text
                name="text"
                placeholder="Beschreibe kurz was dir zu deinem Spot einfällt..."
                value={formValue.text}
                onChange={handleChange}
              />
              {errors.text && <StyledError>{errors.text}</StyledError>}
              <Tags
                name="tags"
                placeholder="#Hashtag"
                value={formValue.tags}
                onChange={handleChange}
              />
              <ButtonGroup>
                <Button>Submit</Button>
                <Button type="Button" onClick={handleClick}>
                  Location?
                </Button>
              </ButtonGroup>
            </Form>
          </FormContainer>
        </LandosFavoriteDiv>
        <FooterNavigation
          links={[
            { to: "/", icon: "fa-home" },
            { to: "/map", icon: "fa-globe-americas" },
            { to: "/secretSpots", icon: "fa-list-ul" },
            { to: "/addSpots", icon: "fa-plus-circle" }
          ]}
        />
      </Grid>
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

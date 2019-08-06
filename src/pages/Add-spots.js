import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
// import uuid from "uuid";

const Container = styled.div`
  padding: 18px;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const StyledError = styled.div`
  color: red;
`;
// const TagContainer = styled.div`
//   padding: 18px;
//   background: #fafafa;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   display: grid;
//   grid-gap: 1;
//   margin: 10px;
// `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.input`
  margin: 5px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const Text = styled.textarea`
  margin: 5px;
  width: 100%;
  height: 150px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const Tags = styled.select`
  margin: 5px;
  width: 100%;
`;

const HeadImg = styled.input`
  margin: 5px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

function AddSpots({ history, onCreate, ...props }) {
  const [formValue, setFormValue] = React.useState({
    title: "",
    headImg: "",
    text: "",
    mapImg:
      "https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_1280.png",
    tags: "",
    bookmarked: "false"
  });

  const [errors, setErrors] = React.useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
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

  function handleSubmit(event) {
    event.preventDefault();

    const errors = validate();
    if (errors) {
      setErrors(errors);
      return;
    }
    const spot = {
      title: formValue.title,
      headImg: formValue.headImg,
      text: formValue.text,
      mapImg:
        "https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_1280.png",
      tags: formValue.tags,
      bookmarked: formValue.bookmarked
    };

    onCreate(spot);
    history.replace("/secret-spots");
  }
  return (
    <>
      <Header title="Add New Spots" icon="fa-plus-circle" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <HeadImg
            name="headImg"
            placeholder="image Url"
            value={formValue.headImg}
            onChange={handleChange}
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
            placeholder="Description..."
            value={formValue.text}
            onChange={handleChange}
          />
          {errors.text && <StyledError>{errors.text}</StyledError>}
          <Tags name="tags" value={formValue.tags} onChange={handleChange}>
            <option value="Wasser">Wasser</option>
            <option value="Relax">Relax</option>
            <option value="Strand">Strand</option>
            <option value="Natur">Natur</option>
            <option value="Urban">Urban</option>
          </Tags>
          {/* <TagContainer>{tags.map(tags => renderCard(card))}</TagContainer> */}
          <ButtonGroup>
            <Button type="button"> Add Photo </Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  );
}

export default AddSpots;

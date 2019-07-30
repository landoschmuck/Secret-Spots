import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import uuid from "uuid";

const Container = styled.div`
  padding: 18px;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 10px;
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
  border: 2px solid #ccc;
  border-radius: 4px;
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

function AddSpots({ history, onCreate }) {
  function handleCancel() {
    history.push("/");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const tags = form.tags.value;
    const card = {
      _id: uuid(Math.random() * 16),
      headImg: form.headImg.value,
      title: form.title.value,
      text: form.text.value,
      mapImg:
        "https://cdn.pixabay.com/photo/2019/07/19/09/54/map-4348394_1280.png",
      tags
    };
    onCreate(card);
    history.replace("/secret_spots");
  }
  return (
    <>
      <Header title="Add New Spots" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <HeadImg name="headImg" placeholder="image Url" />
          <Title name="title" placeholder="Title" />
          <Text name="text" placeholder="Description..." />
          <Tags name="tags">
            <option value="Wasser">Wasser</option>
            <option value="Relax">Relax</option>
            <option value="Strand">Strand</option>
            <option value="Natur">Natur</option>
            <option value="Urban">Urban</option>
          </Tags>
          {/* <TagContainer>{tags.map(tags => renderCard(card))}</TagContainer> */}

          <ButtonGroup>
            <Button type="button"> Add Photo </Button>
            <Button type="button" onClick={handleCancel}>
              {" "}
              Cancel
            </Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Form>
      </Container>
    </>
  );
}

export default AddSpots;

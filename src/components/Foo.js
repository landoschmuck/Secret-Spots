import React from "react";
import styled from "styled-components";

const TagItem = styled.button`
  background-color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font: inherit;
  margin-left: 10px;
  font-weight: bold;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function RenderTags() {
  const [tagItem, setTagItems] = React.useState();

  handleKeyDown = evt => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      let value = tagItem.value.trim();

      if (value && isValid(value)) {
        setTagItems({
          items: [...tagItem.items, tagItem.value],
          value: ""
        });
      }
    }
  };

  handleChange = evt => {
    setTagItems({
      value: tagItem.value,
      error: null
    });
  };

  handleDelete = item => {
    setTagItems({
      items: tagItem.items.filter(i => i !== item)
    });
  };

  handlePaste = evt => {
    evt.preventDefault();

    let paste = evt.clipboardData.getData("text");
    let tag = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (tag) {
      let toBeAdded = tag.filter(email => !isInList(tag));

      setTagItems({
        items: [...tagItem.items, ...toBeAdded]
      });
    }
  };
  return (
    <>
      {tagItem.map(item => (
        <TagItem key={item} type="button" onClick={() => handleDelete(item)}>
          {item}
        </TagItem>
      ))}

      <input
        value={tagItem.value}
        placeholder="Placemoode"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onPaste={handlePaste}
      />
    </>
  );
}

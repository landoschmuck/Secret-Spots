import styled from "styled-components";
import Button from "../../components/Button";

export const MapButton = styled(Button)`
  margin: -7px;
  margin-top: -30px;
  font-size: 20px;
`;

export const ModalDialog = styled.div`
  width: 90%;
  height: 70%;
  z-index: 1;
  color: #000;
  background: white;
  opacity: 1;
  box-shadow: grey 0px 4px 4px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
`;

export const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 92vh;
  background: rgba(193, 177, 170, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  padding: 18px;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: auto;
  box-shadow: 1px 4px 10px 4px rgba(214, 211, 214, 1);

  @media (min-width: 500px) {
    width: 350px;
  }
`;

// const ButtonLogo = styled.span`
//   color: white;
//   margin-right: 10px;
// `;

// const ImgButton = styled(Button)`
//   width: 100%;
//   height: 220px;
//   border: solid 1px black;
//   padding: 10px;
//   font-size: 25;
// `;

export const StyledError = styled.div`
  color: red;
  font-size: 13px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.input`
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 13px;
  margin-top: 18px;
  height: 30px;
`;

export const Text = styled.textarea`
  margin: 5px;
  width: 100%;
  height: 100px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 13px;
  margin-top: 13px;
`;

export const Tags = styled.select`
  margin: 5px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: white;
  margin-bottom: 18px;
  height: 30px;
`;

// const HeadImg = styled.input`
//   margin: 5px;
//   width: 100%;
//   border: 2px solid #ccc;
//   border-radius: 4px;
//   display: none;
// `;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

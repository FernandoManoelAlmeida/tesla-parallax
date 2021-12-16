import styled from "styled-components";

export const ButtonContainer = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
  }

  ${(props) => props?.imp === "secondary" && `
    background-color: white;
    opacity: 0.65;
    a {
      color: black;
    }
  `}
`;

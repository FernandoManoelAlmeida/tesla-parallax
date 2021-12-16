import React from "react";
import { ButtonContainer } from "./styles"

function Button({ imp, text, link }) {
  return (
    <ButtonContainer {...imp}>
      <a href={link}>
        {text}
      </a>
    </ButtonContainer>
  )
}

export default Button;

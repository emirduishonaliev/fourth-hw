import React from "react";
import styled from "styled-components";

export const Input = ({ onChange, inputType, labelName, id }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledInput onChange={onChange} type={inputType} id={id} />
    </div>
  );
};

const StyledInput = styled.input`
  border: 1px solid black;
  width: 600px;
  height: 30px;
  margin: 10px;
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
`;

import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";

export const AddMovieModal = ({ addNewMovie,addMovieClickHandler }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };
  const onChangeUrl = (e) => {
    setUrl(e.target.value);
  };
  const onChangeRating = (e) => {
    setRating(e.target.value);
  };

  const saveHandler = () => {
    const data = {
      title,
      url,
      rating,
      id: Math.random(),
    };
    addNewMovie(data);
    addMovieClickHandler()
  };
  return (
    <Modal>
      <ModalMovie>
        <Input
          inputType={"text"}
          labelName={"Movie Title"}
          id={title}
          onChange={onChangeInput}
        />
        <Input
          inputType={"text"}
          labelName={"Image URL"}
          id={url}
          onChange={onChangeUrl}
        />
        <Input
          inputType={"text"}
          labelName={"Your Rating"}
          id={rating}
          onChange={onChangeRating}
        />
        <ButtonContainer>
          <Button onClick={addMovieClickHandler} color="#6495ED" title="Cancel" />
          <Button color="#00008B" title="Add" onClick={saveHandler} />
        </ButtonContainer>
      </ModalMovie>
    </Modal>
  );
};

const ModalMovie = styled.div`
  display: flex;
  flex-direction: column;
`;

const Modal = styled.div`
  background-color: #c5c4c4;
  padding: 30px;
  min-width: 400px;
  min-height: 250px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-right: 10px;
`;

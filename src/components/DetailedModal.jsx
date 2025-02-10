import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

const CloseButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  &:hover {
    background: #cc0000;
  }
`;

const DetailedModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{pokemon.korean_name}</h2>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.description}</p>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DetailedModal;

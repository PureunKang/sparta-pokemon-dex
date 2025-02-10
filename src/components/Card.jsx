import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StCard = styled.div`
  width: 140px;
  height: 240px;
  display: flex;
  flex-direction: column;
  border: none;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #f8f8f8;
  overflow: hidden;
  border-radius: 5px;
  ${({ showTransition }) =>
    showTransition &&
    `
    transition: transform 0.2s;
    &:hover {
    transform: scale(1.05);
    }
  `}
`;

const StImg = styled.img`
  width: 120px;
  height: 120px;
`;

const StName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  color: black;
`;

const Card = ({
  img_url,
  korean_name,
  onClick,
  linkTo,
  buttonType,
  showTransition = true,
}) => {
  const ShowLinkTo = linkTo ? "a" : "div";
  return (
    <StCard as={ShowLinkTo} href={linkTo} showTransition={showTransition}>
      <StImg src={img_url} alt={korean_name} />
      <StName>{korean_name}</StName>
      <Button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {buttonType === "add" ? "추가" : "삭제"}
      </Button>
    </StCard>
  );
};

export default Card;

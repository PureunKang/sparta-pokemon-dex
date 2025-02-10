import React from "react";
import styled from "styled-components";

const StButton = styled.button`
  border: none;
  text-decoration: none;
  background-color: #ffcc00;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #e6b800;
  }
`;

const Button = ({ children, onClick }) => {
  return <StButton onClick={onClick}>{children}</StButton>;
};

export default Button;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StButton = styled(Link)`
  border: none;
  text-decoration: none;
  background-color: #3b4cca;

  color: #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #2f3da5;
  }
`;

const LinkButton = ({ children, to }) => {
  return <StButton to={to}>{children}</StButton>;
};

export default LinkButton;

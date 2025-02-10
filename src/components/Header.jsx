import React from "react";
import styled from "styled-components";
// import poketmonLogo from "../img";

const StHeader = styled.header`
  width: 100vh;
  height: 30px;
  background-color: white;
  text-indent: -9999px;
  margin-bottom: 50px;
`;
// const StImageBox = styled.div`
//   background-image: url(${poketmonLogo});
//   background-position: center;
//   background-size: cover;
//   width: 10%;
// `;

const Header = () => {
  return (
    <StHeader>
      포켓몬
      {/* <StImageBox /> */}
    </StHeader>
  );
};

export default Header;

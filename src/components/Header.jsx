import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  text-indent: -9999px;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const StImageBox = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/538px-International_Pokémon_logo.svg.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
`;

const Header = () => {
  return (
    <StHeader>
      포켓몬 도감
      <StImageBox />
    </StHeader>
  );
};

export default Header;

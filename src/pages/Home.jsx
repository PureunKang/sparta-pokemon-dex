import React from "react";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #fff;
`;

const StLogo = styled.div`
  width: 538px;
  height: 198px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/538px-International_Pokémon_logo.svg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -9999px;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <StDiv>
      <StLogo>포켓몬 로고</StLogo>
      <LinkButton to="/dex">포켓몬 도감 보러가기</LinkButton>
    </StDiv>
  );
};

export default Home;

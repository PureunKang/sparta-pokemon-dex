import React from "react";
import LinkButton from "../components/LinkButton";
// import pokemonLogo from "../assets/logo.png";
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

const Home = () => {
  return (
    <StDiv>
      {/* <div
        style={{
          textIndent: "-9999px",
          backgroundImage: `url(${pokemonLogo})`,
        }}
      > */}
      포켓몬 로고 <br />
      {/* </div> */}
      <LinkButton to="/dex">포켓몬 도감 보러가기</LinkButton>
    </StDiv>
  );
};

export default Home;

import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../context/PokemonContext";
import Card from "../../components/Card";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3466af;
  width: 100%;
  min-height: 300px;
  padding: 20px 0;
  margin-top: 80px;
  margin-bottom: 20px;
`;

const StDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 20px;
`;

const Dashboard = () => {
  const { selectedPokemons, removePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <h2
        style={{
          marginBottom: "10px",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          position: "relative",
          zIndex: "10",
        }}
      >
        나만의 포켓몬
      </h2>
      <StDiv>
        {selectedPokemons.length === 0 ? (
          <p style={{ color: "white", fontSize: "18px" }}>
            현재 추가된 포켓몬이 없습니다.
          </p>
        ) : (
          selectedPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              img_url={pokemon.img_url}
              korean_name={pokemon.korean_name}
              onClick={() => removePokemon(pokemon.id)}
              buttonType="remove"
              showTransition={false}
            />
          ))
        )}
      </StDiv>
    </DashboardContainer>
  );
};

export default Dashboard;

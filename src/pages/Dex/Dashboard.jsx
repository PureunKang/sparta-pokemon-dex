import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../context/PokemonContext";
import Card from "../../components/Card";

const StDiv = styled.div`
  width: 100vh;
  height: 240px;
  justify-content: center;
  align-items: center;
  padding: 0 auto;
  gap: 10px;
  display: flex;
  margin-bottom: 50px;
`;

const Dashboard = () => {
  const { selectedPokemons, removePokemon } = useContext(PokemonContext);

  if (selectedPokemons.length > 6)
    return alert("포켓몬은 최대 6개 저장 가능합니다. 삭제 후 저장해 주세요!");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>나만의 포켓몬</h2>
      <StDiv>
        {selectedPokemons.length === 0 ? (
          <p>현재 추가된 포켓몬이 없습니다.</p>
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
    </div>
  );
};

export default Dashboard;

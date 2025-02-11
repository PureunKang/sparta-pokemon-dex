import React from "react";
// import { useContext } from "react";
import MOCK_DATA from "../../data/mockData";
import Card from "../../components/Card";
// import { PokemonContext } from "../../context/PokemonContext";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/slices/pokemonSlice";

const PocketmonList = () => {
  // const { addPokemon } = useContext(PokemonContext);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {MOCK_DATA.map((pokemon) => (
        <Card
          key={pokemon.id}
          img_url={pokemon.img_url}
          korean_name={pokemon.korean_name}
          linkTo={`/detail?id=${pokemon.id}`}
          onClick={() => dispatch(addPokemon(pokemon))}
          buttonType="add"
          showTransition={true}
        />
      ))}
    </div>
  );
};

export default PocketmonList;

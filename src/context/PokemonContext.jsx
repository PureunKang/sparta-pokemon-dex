import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectedPokemons((prev) => {
      if (selectedPokemons.some((p) => p.id === pokemon.id)) {
        alert("이미 추가된 포켓몬 입니다.");
        return prev;
      }

      if (prev.length >= 6) {
        alert("나만의 포켓몬은 최대 6개 등록 가능합니다.");
        return prev;
      }

      return [...prev, pokemon];
    });
  };

  const removePokemon = (id) => {
    setSelectedPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectedPokemons((prev) => [...prev, pokemon]);
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

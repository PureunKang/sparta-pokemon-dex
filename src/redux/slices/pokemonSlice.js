import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.selectedPokemons.some((p) => p.id === action.payload.id)) {
        alert("이미 추가된 포켓몬 입니다.");
        return;
      }
      if (state.selectedPokemons.length >= 6) {
        alert("나만의 포켓몬은 최대 6개 등록 가능합니다.");
        return;
      }
      state.selectedPokemons.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selectedPokemons = state.selectedPokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

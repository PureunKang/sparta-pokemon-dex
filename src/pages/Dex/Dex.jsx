import React from "react";
import Dashboard from "./Dashboard";
import PocketmonList from "./PocketmonList";
import Header from "../../components/Header";
import { PokemonProvider } from "../../context/PokemonContext";

const Dex = () => {
  return (
    <PokemonProvider>
      <div>
        <Header />
        <Dashboard />
        <PocketmonList />
      </div>
    </PokemonProvider>
  );
};

export default Dex;

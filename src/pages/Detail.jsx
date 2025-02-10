import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mockData";
import DetailedModal from "../components/DetailedModal";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id.toString() === pokemonId
  );

  return (
    <div>
      <DetailedModal pokemon={pokemon} onClose={() => navigate(-1)} />
    </div>
  );
};

export default Detail;

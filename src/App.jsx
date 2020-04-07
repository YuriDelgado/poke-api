import React, { useState } from "react";
import "./App.css";
import PokeCatcher from "./PokeCatcher";
import PokeList from "./PokeList";

const App = () => {
  const [pokeList, setPokeList] = useState([]);

  const storePokemon = (data) => {
    setPokeList([...pokeList, data]);
  };

  return (
    <div className="App">
      <h2>PokeAPI</h2>
      <PokeCatcher pokemonData={storePokemon} />
      <PokeList pokeList={pokeList} />
    </div>
  );
};

export default App;

import React from "react";
import axios from "axios";

const getImage = (url) => {
  console.log(url);
  axios
    .get(url)
    .then((res) => {
      // console.log(res.data.sprites.front_default);
      return res.data.sprites.front_default;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const PokeList = (props) => {
  return (
    <>
      {props.pokeList.lenght === 0 && "There are no pokemons, yet. Add one!"}
      {props.pokeList.map((pokemon, idx) => (
        <div key={idx}>
          <div style={{ maxWidth: "400px" }}>
            <img src={getImage(pokemon.urlImage)} />
          </div>
          <div>{pokemon.name}</div>
        </div>
      ))}
    </>
  );
};

export default PokeList;

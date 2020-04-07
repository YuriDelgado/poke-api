import React, { Component } from "react";

import Pokemon from "./Pokemon";

class PokeList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    urlImage: "",
  };

  render() {
    return (
      <>
        {this.props.pokeList.lenght === 0 &&
          "There are no pokemons, yet. Add one!"}
        {this.props.pokeList.map((pokemon, idx) => (
          <Pokemon key={idx} pokeInfo={pokemon} />
        ))}
      </>
    );
  }
}

export default PokeList;

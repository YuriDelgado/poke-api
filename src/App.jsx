import React, { Component } from "react";
import "./App.css";
import PokeCatcher from "./PokeCatcher";
import PokeList from "./PokeList";

class App extends Component {
  state = {
    pokeList: [],
  };

  storePokemon = (data) => {
    this.setState({ pokeList: [...this.state.pokeList, data] });
  };

  render() {
    return (
      <div className="App">
        <h2>PokeAPI</h2>
        <PokeCatcher pokemonData={this.storePokemon} />
        <PokeList pokeList={this.state.pokeList} />
      </div>
    );
  }
}

export default App;

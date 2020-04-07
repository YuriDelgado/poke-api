import React, { Component } from "react";
import axios from "axios";

class PokeCatcher extends Component {
  state = {
    pokeName: "",
  };

  handlerChange = (e) => {
    e.preventDefault();

    this.setState({ pokeName: e.target.value });
  };

  handlerClick = (e) => {
    e.preventDefault();
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokeName)
      .then((response) => {
        this.props.pokemonData({
          name: response.data.name,
          urlImage: response.data.forms[0].url,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <>
        <input
          name="pokeName"
          value={this.state.pokeName}
          onChange={this.handlerChange}
        />
        <button onClick={this.handlerClick}>Catch!</button>
      </>
    );
  }
}

export default PokeCatcher;

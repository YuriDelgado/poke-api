import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get(props.pokeInfo.urlImage)
      .then((res) => {
        setUrl(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ width: 350, height: 60 }}>
      <div style={{ maxWidth: 50, maxHeight: 50 }}>
        <img src={url} alt=" " />
      </div>
      <div>{props.pokeInfo.name}</div>
    </div>
  );
};
export default Pokemon;

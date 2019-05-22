import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Style from './Pokemon.style';

interface Props {
  pokemonProp: { name: string; id: number; weight: number; height: number };
}

function Pokemon(props: Props) {
  const [clicked, setClicked] = useState(false);

  return (
    <Style.Intro to={`pokemon/${props.pokemonProp.id}`}>
      <div>{props.pokemonProp.name.charAt(0).toUpperCase() + props.pokemonProp.name.slice(1)}</div>
      <div className="imageContainer">
        <img
          alt={props.pokemonProp.name}
          src={
            !clicked
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  props.pokemonProp.id
                }.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  props.pokemonProp.id
                }.png`
          }
        />
        <img className="turnIcon" src={'/turn-ico.svg'} onClick={() => setClicked(!clicked)} />
      </div>
      <div>
        Id: <span className="numberElement">{props.pokemonProp.id}</span>
      </div>
      <div>
        Weight: <span className="numberElement">{props.pokemonProp.weight}</span> kg
      </div>
      <div>
        Height: <span className="numberElement">{props.pokemonProp.height}</span> cm
      </div>
    </Style.Intro>
  );
}

export default Pokemon;

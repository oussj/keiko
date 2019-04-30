import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  pokemonProp: { name: string; id: number; weight: number; height: number };
}

function Pokemon(props: Props) {
  return (
    <Style.Intro>
      <div>{props.pokemonProp.name.charAt(0).toUpperCase() + props.pokemonProp.name.slice(1)}</div>
      <img
        alt={props.pokemonProp.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          props.pokemonProp.id
        }.png`}
      />
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

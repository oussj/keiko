import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

function Pokemon(props: Props) {
  return (
    <Style.Intro>
      <div>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
      <img
        alt={props.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          props.id
        }.png`}
      />
      <div>
        Id: <span className="numberElement">{props.id}</span>
      </div>
      <div>
        Weight: <span className="numberElement">{props.weight}</span> kg
      </div>
      <div>
        Height: <span className="numberElement">{props.height}</span> cm
      </div>
    </Style.Intro>
  );
}

export default Pokemon;

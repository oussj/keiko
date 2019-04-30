import React, { useState } from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

function Pokemon(props: Props) {
  const [clicked, setClicked] = useState(false);

  return (
    <Style.Intro>
      <div>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
      <div className="imageContainer">
        <img
          alt={props.name}
          src={
            !clicked
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  props.id
                }.png`
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  props.id
                }.png`
          }
        />
        <img className="turnIcon" src={'turn-ico.svg'} onClick={() => setClicked(!clicked)} />
      </div>
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

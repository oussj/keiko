import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
}

class Pokemon extends React.Component<Props> {
  render(): React.ReactNode {
    const pokemon = 'Carapuce';
    const number = 7;

    return (
      <Style.Intro>
        <div>{this.props.name}</div>
        <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}/>
      </Style.Intro>
    );
  }
}

export default Pokemon;

import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  pokemonProp: { name: string; id: number; weight: number; height: number };
}

class Pokemon extends React.Component<Props> {
  displayName(): string {
    return (
      this.props.pokemonProp.name.charAt(0).toUpperCase() + this.props.pokemonProp.name.slice(1)
    );
  }

  render(): React.ReactNode {
    const pokemon = 'Carapuce';

    return (
      <Style.Intro>
        <div>{this.displayName()}</div>
        <img
          alt={this.props.pokemonProp.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.pokemonProp.id
          }.png`}
        />
        <div>
          Id: <span className="numberElement">{this.props.pokemonProp.id}</span>
        </div>
        <div>
          Weight: <span className="numberElement">{this.props.pokemonProp.weight}</span> kg
        </div>
        <div>
          Height: <span className="numberElement">{this.props.pokemonProp.height}</span> cm
        </div>
      </Style.Intro>
    );
  }
}

export default Pokemon;

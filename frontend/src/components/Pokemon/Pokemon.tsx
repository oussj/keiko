import * as React from 'react';

import Style from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

class Pokemon extends React.Component<Props> {
  displayName(): string {
    return this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
  }

  render(): React.ReactNode {
    const pokemon = 'Carapuce';

    return (
      <Style.Intro>
        <div>{this.displayName()}</div>
        <img
          alt={this.props.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.props.id
          }.png`}
        />
        <div>
          Id: <span className='numberElement'>{this.props.id}</span>
        </div>
        <div>
          Weight: <span className='numberElement'>{this.props.weight}</span> kg
        </div>
        <div>
          Height: <span className='numberElement'>{this.props.height}</span> cm
        </div>
      </Style.Intro>
    );
  }
}

export default Pokemon;

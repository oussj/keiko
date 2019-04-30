import * as React from 'react';

import Pokemon from 'components/Pokemon/Pokemon';
import { makeGetRequest } from 'services/networking/request';
import { GlobalStyle } from './Global.style';
import Style from './Home.style';

interface State {
  pokemons: Array<{
    id: number;
    name: string;
    weight: number;
    height: number;
  }>;
}

class Home extends React.Component<{}, State> {
  componentDidMount() {
    makeGetRequest('/pokemon').then(response => {
      this.setState({ pokemons: response.body });
    });
  }

  render(): React.ReactNode {
    return (
      <Style.Homepage>
        <GlobalStyle />
        <Style.Title>Pokedex</Style.Title>
        <Style.Pokedex>
          {this.state ? (
            this.state.pokemons.map(pokemonData => (
              <Pokemon
                name={pokemonData.name}
                id={pokemonData.id}
                weight={pokemonData.weight}
                height={pokemonData.height}
              />
            ))
          ) : (
            <div>Your future pokedex will be here</div>
          )}
        </Style.Pokedex>
      </Style.Homepage>
    );
  }
}

export default Home;

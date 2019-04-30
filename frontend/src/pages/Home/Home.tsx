import * as React from 'react';

import Pokemon from 'components/Pokemon/Pokemon';
import { makeGetRequest } from 'services/networking/request';
import Style from './Home.style';

interface State {
  pokemons: Array<{
    id: number;
    name: string;
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
      <Style.Intro>
        {this.state ? (
          this.state.pokemons.map(pokemonData => (
            <Pokemon name={pokemonData.name} id={pokemonData.id} />
          ))
        ) : (
          <div>Your future pokedex will be here</div>
        )}
      </Style.Intro>
    );
  }
}

export default Home;

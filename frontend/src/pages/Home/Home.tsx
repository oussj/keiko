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
  errorHappened: boolean;
}

class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { pokemons: [], errorHappened: false };
  }

  componentDidMount() {
    makeGetRequest('/pokemon')
      .then(response => {
        this.setState({ pokemons: response.body });
      })
      .catch(err => {
        this.setState({ errorHappened: true });
      });
  }

  render(): React.ReactNode {
    return (
      <Style.Homepage>
        <GlobalStyle />
        <Style.Title>Pokedex</Style.Title>
        <Style.Pokedex>
          {this.state.pokemons.length > 0 ? (
            this.state.errorHappened ? (
              <div>The app could not retrieve pokemons</div>
            ) : (
              this.state.pokemons.map(pokemonData => (
                <Pokemon
                  name={pokemonData.name}
                  id={pokemonData.id}
                  weight={pokemonData.weight}
                  height={pokemonData.height}
                />
              ))
            )
          ) : (
            <img src="loader.svg" alt="loader" />
          )}
        </Style.Pokedex>
      </Style.Homepage>
    );
  }
}

export default Home;

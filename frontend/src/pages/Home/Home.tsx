import React, { useEffect, useState } from 'react';

import Pokemon from 'components/Pokemon/Pokemon';
import { makeGetRequest } from 'services/networking/request';
import Style from './Home.style';

interface PokemonData {
  id: number;
  name: string;
  weight: number;
  height: number;
}

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [errorHappened, setErrorHappened] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeGetRequest('/pokemon');
        setPokemons(response.body);
      } catch (err) {
        setErrorHappened(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Style.Homepage>
      <Style.Title>Pokedex</Style.Title>
      <Style.Pokedex>
        {pokemons.length > 0 ? (
          errorHappened ? (
            <div>The app could not retrieve pokemons</div>
          ) : (
            pokemons.map((pokemonData: PokemonData) => <Pokemon pokemonProp={pokemonData} />)
          )
        ) : (
          <img src="loader.svg" alt="loader" />
        )}
      </Style.Pokedex>
    </Style.Homepage>
  );
}

export default Home;

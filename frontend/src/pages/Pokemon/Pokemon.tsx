import Pokemon from 'components/Pokemon/Pokemon';
import React, { useEffect, useState } from 'react';
import { makeGetRequest } from 'services/networking/request';
import style from './Pokemon.module.scss';
import Style from './Pokemon.style';

interface PokemonData {
  id: number;
  name: string;
  weight: number;
  height: number;
}

function PokemonPage() {
  const [pokemon, setPokemon] = useState({
    id: -1,
    name: 'test',
    weight: -1,
    height: -1,
  });
  const [errorHappened, setErrorHappened] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeGetRequest('/pokemon/2');
        setPokemon(response.body);
      } catch (err) {
        setErrorHappened(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Style.PokemonPage>
      {pokemon.id !== -1 ? (
        errorHappened ? (
          <div>The app could not retrieve pokemon</div>
        ) : (
          <Style.PokemonContainer>
            <Style.Title>{pokemon.name}</Style.Title>
            <Pokemon
              name={pokemon.name}
              id={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          </Style.PokemonContainer>
        )
      ) : (
        <img src={process.env.PUBLIC_URL + '/loader.svg'} alt="loader" />
      )}
    </Style.PokemonPage>
  );
}

export default PokemonPage;

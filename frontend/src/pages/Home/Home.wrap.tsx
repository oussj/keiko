import withDataFetching from 'HOC/withDataFetching';
import * as React from 'react';
import { connect } from 'react-redux';
import { PokemonMap } from "redux/Pokemon";
import { fetchPokemonsSuccess } from 'redux/Pokemon/actions';
import { getPokemons } from "redux/Pokemon/selectors";
import {PokemonType} from "redux/Pokemon/types";
import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';

const mapStateToProps = (state: RootState) => ({
  pokemons: getPokemons(state),
});

const mapDispatchToProps = {
    fetchPokemonsSuccess,
};

const normalizePokemons  = (pokemons: PokemonType[]): PokemonMap => pokemons.reduce((pokemonMap: PokemonMap, pokemon) => {
    pokemonMap[pokemon.id] = pokemon;
    return pokemonMap;
    }, {})

export default connect(mapStateToProps, mapDispatchToProps)(
  withDataFetching<Props>(
      (props: Props) => makeGetRequest('/pokemon', {page: props.match.params.page}),
      (props: Props) => [props.match.params.page],
      (props: Props, data: PokemonType[]) => {
        props.fetchPokemonsSuccess(normalizePokemons(data))
      }
      )(Home)
    ,
);

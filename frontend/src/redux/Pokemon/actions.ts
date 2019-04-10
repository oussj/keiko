import { createStandardAction } from 'typesafe-actions';
import { PokemonType } from './types';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<{
  pokemons: PokemonType[];
}>();

export default {
  fetchPokemonsSuccess,
};

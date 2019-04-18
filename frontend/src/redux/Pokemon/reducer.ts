import { AnyAction } from 'redux';
import { PokemonType } from "redux/Pokemon/types";
import { actionsTypes } from './actions';

export type PokemonMap = Record<string, PokemonType>

export type PokemonState = Readonly<PokemonMap>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.fetchPokemonsSuccess :
      return {
        ...action.pokemons
      }
  case actionsTypes.fetchPokemonSuccess :
    return {
      ...state,
      [action.pokemon.id]: action.pokemon
    }
    default :
      return state
  }
};

export default reducer;

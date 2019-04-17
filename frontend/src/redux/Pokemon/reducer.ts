import { AnyAction } from 'redux';
import { PokemonType } from "redux/Pokemon/types";
import { actionsTypes } from './actions';

export type PokemonMap = Record<string, PokemonType>

export type PokemonState = Readonly<PokemonMap>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionsTypes.fetchPokemonSuccess :
      return {
        ...action.pokemons
      }
    default :
      return state
  }
};

export default reducer;

import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { PokemonType } from './types';

export type PokemonState = Readonly<Record<string, PokemonType>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;

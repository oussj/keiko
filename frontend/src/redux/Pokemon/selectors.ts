import { PokemonType } from "redux/Pokemon/types";
import { RootState } from 'redux/types';

export const getPokemons = (store: RootState): PokemonType[] => Object.values(store.pokemon);

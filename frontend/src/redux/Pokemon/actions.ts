import { PokemonMap } from "redux/Pokemon/reducer";

export const actionsTypes = {
  fetchPokemonSuccess: 'Pokemon/FETCH_POKEMON_SUCCESS'
}

export const fetchPokemonsSuccess = (pokemons: PokemonMap) => ({
  type: actionsTypes.fetchPokemonSuccess,
  pokemons,
})

export default {
  fetchPokemonsSuccess,
};

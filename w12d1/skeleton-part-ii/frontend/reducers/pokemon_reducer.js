import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON:
    let nextState = Object.assign({}, state)
    nextState[action.pokemon.id] = action.pokemon
    return nextState;
  default:
    return state;
  }
}
  
export default pokemonReducer;

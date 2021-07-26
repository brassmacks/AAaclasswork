import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const moveReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon.moves, state);
    case RECEIVE_POKEMON:
      let nextState = Object.assign({}, state)
      nextState[action.pokemon.id] = action.pokemon.moves
      return nextState;
    default:
      return state;
  }
}

export default moveReducer;

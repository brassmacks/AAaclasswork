import {combineReducers} from 'redux';
import itemReducer from './items_reducer';
import pokemonReducer from './pokemon_reducer';
import moveReducer from './moves_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemReducer,
  moves: moveReducer
})

export default entitiesReducer;
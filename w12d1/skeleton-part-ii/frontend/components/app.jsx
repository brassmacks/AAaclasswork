import React from 'react'
import {Route} from 'react-router-dom'
import PokemonIndexContainer from "./pokemon/pokemon_index_container"
import PokemonDetailContainer from './pokemon/pokemon_detail_container'

export const App = () => (
  <Route path="/" component={PokemonIndexContainer}/>,
  <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
)


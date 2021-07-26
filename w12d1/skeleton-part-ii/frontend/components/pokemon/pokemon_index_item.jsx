import PokemonIndex from './pokemon_index'
import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonIndexItem = (props) => {
  return (
    <div>
        <Link to={`/pokemon/${props.poke.id}`} >       
      <li key={props.poke.id} name={props.poke.name} img_url={props.poke.img_url}>
        <span>{props.poke.id}</span>
        <img src={props.poke.imageUrl} />
        <span>{props.poke.name}</span>
      </li>
      </Link>
    </div>
  )
}




import React from 'react'
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <PokemonDetailContainer />
      </div>
    )
  }
}
export default PokemonDetail;
import PokemonDetail from "./pokemon_detail";
import {connect} from 'react-redux'
import { requestPokemon } from "../../actions/pokemon_actions";



const mapStateToProps = state => ({
  items: Object.values(state.pokemon.items),
  moves: Object.values(state.pokemon.moves)
})

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
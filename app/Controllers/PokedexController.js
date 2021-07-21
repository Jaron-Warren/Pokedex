import { ProxyState } from "../AppState.js";
import { pokedexService } from "../Services/PokedexService.js";

function _drawAll() {
  const pokemon = ProxyState.pokeApiPokemon
  let templet = ''
  pokemon.forEach(p => templet += `<li class="action" onclick="app.pokedexcontroller.getPokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('pokeApi').innerHTML = templet
}

function _drawActive() {
  document.getElementById("activePokemon").innerHTML = ProxyState.activePokemon.Template
  console.log(ProxyState.activePokemon.types)
}
export default class PokedexController {
  constructor() {
    ProxyState.on("activePokemon", _drawActive)
    ProxyState.on("pokeApiPokemon", _drawAll)
    this.getAllPokemon()
  }

  async getAllPokemon() {
    try {
      await pokedexService.getAllPokemon()
    } catch (error) {
      console.error('There was an issue getting data from the pokemon API')
    }
  }

  async getPokemon(name) {
    try {
      await pokedexService.getPokemon(name)
    } catch (error) {
      console.log("unable to retrieve pokemon details")
    }
  }
}
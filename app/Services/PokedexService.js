import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"
import Pokemon from "../Models/Pokemon.js"

class PokedexService {

  async getAllPokemon() {
    let res = await pokeApi.get()
    // console.log(res.data.results)
    ProxyState.pokeApiPokemon = res.data.results
  }

  async getPokemon(name) {
    let res = await pokeApi.get(name)
    // console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}

export const pokedexService = new PokedexService
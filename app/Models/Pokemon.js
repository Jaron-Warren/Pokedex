import { ProxyState } from "../AppState.js";

export default class Pokemon {
  constructor({ id, name, img, weight, height, types, sprites }) {
    this.id = id
    this.name = name
    this.img = img || sprites.other.dream_world.front_default
    this.weight = weight
    this.height = height
    this.types = PTypes

  }

  get PTypes() {

    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

      }
    }
    return
  }
  get Template() {
    return `
    <div class="bg-secondary m-2 p-1 shadow rounded">
    <div>
      <img src="${this.img}" alt="${this.name}" width="200" height="200">
        <h4 class='uppercase'>${this.name}</h4>
        <p>Weight: ${this.weight}</p>
        <p>Height: ${this.height}</p>
        <p>Types: [${this.types.join(", ")}]</p>
    </div>
    <div class="text-right">
       ${this.Button}
    </div>
    </div>
    `
  }

  get Button() {
    return `<button type="button" class="btn btn-danger text-gold" onclick="console.log('add')">Save Pokemon</button>`
  }
}


/** sandbox api
 *
 * {
  "name": {
    "type": "String",
    "required": true
  },
  "img": {
    "type": "String",
    "required": true
  },
  "weight": {
    "type": "String"
  },
  "height": {
    "type": "String"
  },
  "types": [
    {
    }
  ],
 */

/** pokeAPI
 * {
  height": 7,
  "id": 1,
  "name": "bulbasaur",
  "weight": 69
   "sprites": {
      "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
   "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
  "type": {
    "name": "poison",
    "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
 */
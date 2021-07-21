import PokedexController from "./Controllers/PokedexController.js";
class App {
  pokedexcontroller = new PokedexController()
}

window["app"] = new App();

import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";
export function initState(cacheInterval) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex 🔴> ",
    });
    const cmd_reg = getCommands();
    const pokeapi = new PokeAPI(cacheInterval);
    return {
        readline_interface: rl,
        command_registry: cmd_reg,
        pokeapi: pokeapi,
        nextLocationsURL: "https://pokeapi.co/api/v2/location-area/",
        prevLocationsURL: null,
    };
}

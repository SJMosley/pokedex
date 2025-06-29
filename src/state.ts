import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  // callback: (commands: Record<string, CLICommand>) => void;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline_interface: Interface;
  command_registry: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string | null;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex 🔴> ",
  });
  const cmd_reg = getCommands();
  const pokeapi = new PokeAPI();
  return {
    readline_interface: rl,
    command_registry: cmd_reg,
    pokeapi: pokeapi,
    nextLocationsURL: "https://pokeapi.co/api/v2/location-area/",
    prevLocationsURL: null,
  };
}

import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Navigate the world",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Navigate to previous locations",
      callback: commandMapBack,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
  };
}

import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
export function getCommands() {
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
        explore: {
            name: "explore",
            description: "Explore the areas pokemon",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Try to catch a pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect a caught pokemon",
            callback: commandInspect,
        },
    };
}

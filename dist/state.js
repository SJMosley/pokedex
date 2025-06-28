import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex 🔴> ",
    });
    const cmd_reg = getCommands();
    return { readline_interface: rl, command_registry: cmd_reg };
}

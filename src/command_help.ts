import type { CLICommand } from "./state.js";
import { State } from "./state.js";

export async function commandHelp(current_state: State) {
  const commands = current_state.command_registry;
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const cmd of Object.values(commands)) {
    const spacer = " ".repeat(6 - cmd.name.length);
    console.log(`${cmd.name}:${spacer}${cmd.description}`);
  }
  console.log();
}

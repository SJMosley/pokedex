import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";

export type CLICommand = {
  name: string;
  description: string;
  // callback: (commands: Record<string, CLICommand>) => void;
  callback: (state: State) => void;
};

export type State = {
  readline_interface: Interface;
  command_registry: Record<string, CLICommand>;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex 🔴> ",
  });
  const cmd_reg = getCommands();
  return { readline_interface: rl, command_registry: cmd_reg };
}

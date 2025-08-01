import { State } from "./state.js";

export async function startREPL(existingState: State) {
  const rl = existingState.readline_interface;

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    const commands = existingState.command_registry;
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    try {
      await cmd.callback(existingState, ...words.slice(1));
      // if (words.length > 1) {
      //   await cmd.callback(existingState, ...words.slice(1));
      // } else {
      //   await cmd.callback(existingState);
      // }
    } catch (e) {
      console.log(e);
    }

    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

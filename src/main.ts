import { startREPL } from "./repl.js";
import { State, initState } from "./state.js";

async function main() {
  const state: State = initState(1000 * 60 * 3); // 3 minutes
  await startREPL(state);
}

main();

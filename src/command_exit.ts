import { State } from "./state.js";

export function commandExit(current_state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  current_state.readline_interface.close();
  process.exit(0);
}

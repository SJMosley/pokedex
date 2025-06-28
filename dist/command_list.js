export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}
export function commandHelp() {
    console.log(`Welcome to the Pokedex!
  Usage:

  help: Displays a help message
  exit: Exit the Pokedex`);
}

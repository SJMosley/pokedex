export async function commandExit(current_state) {
    console.log("Closing the Pokedex... Goodbye!");
    current_state.readline_interface.close();
    process.exit(0);
}

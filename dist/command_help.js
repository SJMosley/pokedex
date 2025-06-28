export function commandHelp(current_state) {
    const commands = current_state.command_registry;
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (const cmd of Object.values(commands)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
    console.log();
}

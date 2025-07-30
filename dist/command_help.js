export async function commandHelp(state) {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (const cmd of Object.values(state.command_registry)) {
        const spacer = " ".repeat(8 - cmd.name.length);
        console.log(`${cmd.name}:${spacer}${cmd.description}`);
    }
    console.log();
}

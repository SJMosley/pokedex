export async function commandExplore(current_state, ...args) {
    // console.log(args);
    if (args.length === 0) {
        console.log("NO LOCATION");
        return;
    }
    const location = await current_state.pokeapi.fetchLocation(args[0]);
    // console.log(location);
    //build console response
    console.log(`Exploring ${args[0]}...`);
    console.log(`Found Pokemon:`);
    for (let encounter of location.pokemon_encounters) {
        console.log(`- ${encounter.pokemon.name}`);
    }
    // current_state.nextLocationsURL = locations.next;
    // current_state.prevLocationsURL = locations.previous;
    // for (let location of locations.results) {
    //   console.log(location.name);
    // }
}

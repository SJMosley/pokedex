export async function commandMapForward(current_state) {
    const locations = await current_state.pokeapi.fetchLocations(current_state.nextLocationsURL);
    current_state.nextLocationsURL = locations.next;
    current_state.prevLocationsURL = locations.previous;
    for (let location of locations.results) {
        console.log(location.name);
    }
}
export async function commandMapBack(state) {
    if (!state.prevLocationsURL) {
        throw new Error("you're on the first page");
    }
    const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (let location of locations.results) {
        console.log(location.name);
    }
}

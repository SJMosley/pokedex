export async function commandMap(current_state) {
    const response = await current_state.pokeapi.fetchLocations(current_state.nextLocationsURL);
    current_state.nextLocationsURL = response.next;
    current_state.prevLocationsURL = response.previous;
    const locations = response.locations;
    for (let location of locations) {
        console.log(location.name);
    }
}
export async function commandMapB(current_state) {
    if (current_state.prevLocationsURL == null) {
        console.log("you're on the first page");
        return;
    }
    const response = await current_state.pokeapi.fetchLocations(current_state.prevLocationsURL);
    current_state.nextLocationsURL = response.next;
    current_state.prevLocationsURL = response.previous;
    const locations = response.locations;
    for (let location of locations) {
        console.log(location.name);
    }
}

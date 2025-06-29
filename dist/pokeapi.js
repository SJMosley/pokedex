export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        // implment this
        const url = `${pageURL}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return {
            next: data.next,
            previous: data.previous,
            locations: data.results,
        };
    }
    async fetchLocation(locationName) {
        // implement this
        const url = `${PokeAPI.baseURL}/location/${locationName}/`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }
}

import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    #store = new Cache(1000);
    constructor() { }
    async fetchLocations(pageURL) {
        // implment this
        const url = `${pageURL}`;
        //check cache
        if (this.#store.get(url) != undefined) {
            //return cache
            return this.#store.get(url)?.val;
        }
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        const result = {
            next: data.next,
            previous: data.previous,
            locations: data.results,
        };
        this.#store.add(url, result);
        return result;
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

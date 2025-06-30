import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #store: Cache;

  constructor(cacheInterval: number) {
    this.#store = new Cache(cacheInterval);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
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

  async fetchLocation(locationName: string): Promise<Location> {
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

export type ShallowLocations = {
  next: string;
  previous: string;
  locations: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  // add properties here
  name: string;
  url: string;
};

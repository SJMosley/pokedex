export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
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

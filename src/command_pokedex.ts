import { State } from "./state.js";

export async function commandPokedex(current_state: State) {
  const pokedexKeys = Object.keys(current_state.pokedex);
  // console.log(`THIS LOOK AT IT ${pokedexKeys.length}`);
  if (pokedexKeys.length == 0) {
    console.log("you have not caught any pokemon");
    return;
  }
  console.log("Your Pokedex:");
  for (const key of pokedexKeys) {
    console.log(`- ${current_state.pokedex[key].name}`);
  }
}

import { State } from "./state.js";

export async function commandInspect(current_state: State, ...args: string[]) {
  if (args.length != 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];
  const pkmn = current_state.pokedex[name];
  if (!pkmn) {
    throw new Error("you have not caught that pokemon");
  }

  console.log(`Name: ${pkmn.name}`);
  console.log(`Height: ${pkmn.height}`);
  console.log(`Weight: ${pkmn.weight}`);
  console.log(`Stats:`);
  for (let stat of pkmn.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log(`Types:`);
  for (let typ of pkmn.types) {
    console.log(`  - ${typ.type.name}`);
  }
}

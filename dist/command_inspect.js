export async function commandInspect(current_state, ...args) {
    if (args.length === 0) {
        console.log("You inspected nothing!");
        return;
    }
    console.log();
    if (args[0] in current_state.pokedex) {
        const pkmn = current_state.pokedex[args[0]];
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
    else {
        console.log(`You have not yet caught ${args[0]}`);
    }
    // const pokemon = await current_state.pokeapi.fetchPokemon(args[0]);
    // //format output
    // console.log(`Throwing a Pokeball at ${pokemon.name}...`);
    // const catchAttempt = Math.random() * pokemon.base_experience;
    // // console.log(`Base Experience: ${pokemon.base_experience}`);
    // // console.log(`catchAttempt: ${catchAttempt}`);
    // if (catchAttempt > 40) {
    //   console.log(`${pokemon.name} was caught!`);
    //   console.log(`You can now inspect it with the inspect command`);
    // } else {
    //   console.log(`${pokemon.name} escaped!`);
    // }
}

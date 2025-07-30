export async function commandCatch(current_state, ...args) {
    if (args.length === 0) {
        console.log("You caught nothing!");
        return;
    }
    const pokemon = await current_state.pokeapi.fetchPokemon(args[0]);
    //format output
    console.log(`Throwing a Pokeball at ${pokemon.name}...`);
    const catchAttempt = Math.random() * pokemon.base_experience;
    // console.log(`Base Experience: ${pokemon.base_experience}`);
    // console.log(`catchAttempt: ${catchAttempt}`);
    if (catchAttempt > 40) {
        console.log(`${pokemon.name} was caught!`);
        console.log(`You can now inspect it with the inspect command`);
        current_state.pokedex[pokemon.name] = pokemon;
    }
    else {
        console.log(`${pokemon.name} escaped!`);
    }
}

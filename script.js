let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander'
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('loaded pokemon', currentPokemon)

    renderPokemonInfo();
}

function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
}
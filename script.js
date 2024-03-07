const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemon;
let allPokemon = [];
let numberLoading = 25;


async function init() {
    await loadIntroPokemon();
    setTimeout(async () => {
        renderIntroPokemon()
        loadRestPokemon()
    }, 2000);
}

async function loadIntroPokemon() {
    for (let i = 1; i < 26; i++) {
        let url = MAIN_URL + `${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        allPokemon.push(responseAsJson);
    }
}

async function loadRestPokemon() {
    for (let i = 26; i < 251; i++) {
        let url = MAIN_URL + `${i}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        allPokemon.push(responseAsJson);
    }
}

function renderIntroPokemon() {
    for (let i = 0; i < numberLoading; i++) {
        let dataPokemon = allPokemon[i];
        let type = dataPokemon['types'][0]['type']['name'];
        let namePokemon = dataPokemon['name'];
        renderLoadedPokemonHTML(type, namePokemon, allPokemon, i + 1);
    }
}

/* function renderLoadedPokemonHTML(type, allPokemon, i) {
    document.getElementById('main-content').innerHTML = '';
    document.getElementById('main-content').innerHTML += `
    <div>
    <h1>${type}</h1>
    </div>
    `;
} */


/* async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander'
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('loaded pokemon', currentPokemon)

    renderPokemonInfo();
}

function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
} */
const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemon;
let allPokemon = [];
let numberLoading = 25;

let color = {
    normal: 'rgb(181,181,181)', fighting: '#BB5545', flying: 'rgb(113,185,217)', poison: 'rgb(170, 120, 186)', ground: 'rgb(184, 132, 63)',
    rock: 'rgb(195,173,95)', bug: 'rgb(182, 182, 80)', ghost: 'rgb(101,102,187)', fire: 'rgb(251, 108, 108)', water: 'rgb(76,137,227)',
    grass: 'rgb(100, 190, 80)', electric: 'rgb(248, 220, 94)', psychic: 'rgb(240, 117, 166)', ice: 'rgb(54,187,215)', dragon: 'rgb(120, 98, 245)',
    fairy: 'rgb(231,165,230)', steel: 'rgb(166,165,170)', dark: 'rgb(115,90,74)11'
};

async function init() {
    showLoader();
    await loadIntroPokemon();
    setTimeout(async () => {
        renderIntroPokemon();
        loadRestPokemon();
        hideLoader();
    }, 1000);
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
        let type = allPokemon[i]['types'][0]['type']['name'];
        let img = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
        let namePokemon = allPokemon[i]['name'];
        let backgroundColor = color[type];
        renderLoadedPokemonHTML(type, img, namePokemon, backgroundColor, allPokemon, i);
    }
}

function renderAdditionalPokemon() {
    let newLoadingNumber = Math.min(numberLoading + 25, 250);
    for (let i = numberLoading; i < newLoadingNumber; i++) {
        let type = allPokemon[i]['types'][0]['type']['name'];
        let img = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
        let namePokemon = allPokemon[i]['name'];
        let backgroundColor = color[type];
        renderLoadedPokemonHTML(type, img, namePokemon, backgroundColor, allPokemon, i);
    }
    numberLoading = newLoadingNumber;
    if (numberLoading >= 250) {
        hideLoadingButton();
    }
}

function openPokedexInfo(i) {
    let type = allPokemon[i]['types'][0]['type']['name'];
    let img = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
    let backgroundColor = color[type];
    let namePokemon = allPokemon[i]['name'];
    document.getElementById('pokedex-card').classList.add('box-fullscreen');
    openPokedexInfoHTML(type, img, namePokemon, backgroundColor, allPokemon, i);
}

//Hilfsfunktionen__________________________________
function showLoader() {
    document.getElementById('loader-container').style.display = 'flex';
}

function hideLoader() {
    document.getElementById('loader-container').style.display = 'none';
}

function hideLoadingButton() {
    document.getElementById('bt-load').classList.add('d-none');
}

function showLoadingButton() {
    document.getElementById('bt-load').classList.remove('d-none');
}

function hidePokedexCard() {
    document.getElementById('pokedex-card').classList.remove('box-fullscreen');
}


// Suchfunktion________________________________________________
function searchPokemon() {
    let search = document.getElementById('search').value.toLowerCase();
    if (search.length >= 3) {
        renderFilteredPokemon(search);
    } else if (search.length === 0) {
        document.getElementById('main-content').innerHTML = '';
        renderIntroPokemon();
        showLoadingButton();
    }
}

function renderFilteredPokemon(search) {// Rendere jedes gefilterte Pokémon
    document.getElementById('main-content').innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        if (allPokemon[i]['name'].toLowerCase().includes(search)) {
        let type = allPokemon[i]['types'][0]['type']['name'];
        let img = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
        let namePokemon = allPokemon[i]['name'];
        let backgroundcolor = color[type];
        renderLoadedPokemonHTML(type, img, namePokemon, backgroundcolor, allPokemon, i);
        hideLoadingButton();
        }
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
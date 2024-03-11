// HTML ------------------------------------
function renderLoadedPokemonHTML(type, img, namePokemon, backgroundColor, allPokemon, i) {
    let mainContent = document.getElementById('main-content');
    let secondType = allPokemon[i]['types'][1] ? `2. type: ${allPokemon[i]['types'][1]['type']['name'].charAt(0).toUpperCase() + allPokemon[i]['types'][1]['type']['name'].slice(1)}` : '';
    mainContent.innerHTML += /* HTML */ `
    <div onclick="openPokedexInfo(${i})">
        <div class="cards" style="background-color: ${backgroundColor};">
            <div class="cards-headline">
                <h2 class="padding-12">${namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1)}</h2>
                <span class="padding-12">${allPokemon[i]['id']}</span>
            </div>
            <div class="cards-type">
                    <span>1. type: ${type.charAt(0).toUpperCase() + type.slice(1)}</span><br>
                    <span>${secondType}</span>
            </div>
            <div class="cards-img">
                <img src="${img}">
            </div>
        </div>
    </div>`;
}

function openPokedexInfoHTML(i, backgroundColor, img, type) {
    let pokedexCard = document.getElementById('pokedex-card');
    pokedexCard.innerHTML = '';
    document.getElementById('pokedex-card').classList.remove("d-none");
    pokedexCard.innerHTML += /* HTML */ `
    <div onclick="hidePokedexCard()">
        <div id="pokedex" style="background-color: ${backgroundColor};">
            <h1 id="pokemonName"></h1>
            <img src="${img}" alt="Pokemon Image">
        </div>
        <div class="info-container">
            
        </div>
    </div>`;
    }
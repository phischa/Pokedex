// HTML ------------------------------------
function renderLoadedPokemonHTML(type, img, namePokemon, backgroundColor, allPokemon, i) {
    let mainContent = document.getElementById('main-content');
    let secondType = allPokemon[i]['types'][1] ? `2. type: ${allPokemon[i]['types'][1]['type']['name'].charAt(0).toUpperCase() + allPokemon[i]['types'][1]['type']['name'].slice(1)}` : '';
    mainContent.innerHTML += /* HTML */ `
    <div onclick="openPokedexInfo(${i})">
        <div class="cards" style="background-color: ${backgroundColor};">
            <div class="cards-headline">
                <h2 class="padding-12">${namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1)}</h2>
                <span class="padding-12 bold">${allPokemon[i]['id']}</span>
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

function openPokedexInfoHTML(type, img, namePokemon, backgroundColor, allPokemon, i) {
    let pokedexCard = document.getElementById('pokedex-card');
    let secondType = allPokemon[i]['types'][1] ? `2. type: ${allPokemon[i]['types'][1]['type']['name'].charAt(0).toUpperCase() + allPokemon[i]['types'][1]['type']['name'].slice(1)}` : '';
    pokedexCard.innerHTML = '';
    document.getElementById('pokedex-card').classList.remove("d-none");
    pokedexCard.innerHTML += /* HTML */ `
    <div class="pokedex-wrapper">
        <div onclick="hidePokedexCard()" id="pokedex" style="background-color: ${backgroundColor};">
            <div class="cards-headline">
                <h2 class="padding-12">${namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1)}</h2>
                <span class="padding-12 bold">${allPokemon[i]['id']}</span>
            </div>
            <div class="cards-type">
                    <span>1. type: ${type.charAt(0).toUpperCase() + type.slice(1)}</span> <br>
                    <span>${secondType}</span>
            </div>
            <div class="cards-img">
                <img src="${img}">
            </div>
        </div>
        <div class="navigation-btn">
            <span onclick="previousPokemon()" id="previous" src="./img/previous.png" alt="PREVIOUS"> <</span>
            <br>
            <span onclick="nextPokemon()" id="next" src="./img/next.png" alt="NEXT">> </span>
        </div>
        <div class="info-container">
            <div class="chart-container">
                <canvas id="myChart"></canvas><br>
            </div>
        </div>
    </div>`;
}
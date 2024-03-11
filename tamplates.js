// HTML ------------------------------------
function renderLoadedPokemonHTML(type, img, namePokemon, backgroundcolor, allPokemon, i) {
    let mainContent = document.getElementById('main-content');
    let secondType = allPokemon[i]['types'][1] ? `2. type: ${allPokemon[i]['types'][1]['type']['name'].charAt(0).toUpperCase() + allPokemon[i]['types'][1]['type']['name'].slice(1)}` : '';
    mainContent.innerHTML += /* HTML */ `
    <div>
        <div class="cards" style="background-color: ${backgroundcolor};">
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
    </div>
    `;
}


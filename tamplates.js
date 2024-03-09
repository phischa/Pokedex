// HTML ------------------------------------
function renderLoadedPokemonHTML(type, img, namePokemon, allPokemon, i) {
    document.getElementById('main-content').innerHTML += /* HTML */ `
    <div>
        <div class="cards">
            <div class="cards-headline">
                <h2 class="padding-12">${namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1)}</h2>
                <span class="padding-12">${i}</span>
            </div>
            <div class="cards-type">
                    <span>1. type: ${type.charAt(0).toUpperCase() + type.slice(1)}</span><br>
                    <span>2. type: </span>
            </div>
            <div class="cards-img">
                <img src="${img}">
            </div>
        </div>
    </div>
    `;
}
// HTML ------------------------------------
function renderLoadedPokemonHTML(type, namePokemon, allPokemon, i) {
    document.getElementById('main-content').innerHTML += /* HTML */ `
    <div>
        <div class="cards">
            <div class="cards-headline">
                <h2 class="padding-12">${namePokemon}</h2>
                <span class="padding-12">${i}</span>
            </div>
            <div>
                Hallo
            </div>
        </div>
    </div>
    `;
}
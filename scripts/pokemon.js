let pokemonsList = [];

function randomCardNumber(array) {
    return Math.floor(Math.random() * array.length );
}

function output(array) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let newPokemonList = array.data;
    let randomIndexNumber = randomCardNumber(newPokemonList);
    let pokemonCardData = newPokemonList[randomIndexNumber];
    let cardUrl = pokemonCardData.images.large;
    image.src = cardUrl;
    image.alt = pokemonCardData.name;
    article.appendChild(image);
    document.querySelector("#pokemonCard").appendChild(article);
}

async function getPokemonCardUrl() {
    const response = await fetch("https://api.pokemontcg.io/v2/cards");
    if (response.ok) {
        pokemonsList = await response.json();
        output(pokemonsList);
    }
}

function reset() {
    const article = document.querySelector("#pokemonCard");
    while (article.hasChildNodes()) {
        article.removeChild(article.firstChild);
    }
}

const d = new Date();
let today = d.getDate();
// Change the next line to check the following conditional branching
// today = 9;
// today = 19;
// today = 29;

if (today <= 10) {
    function getRandom() {
        reset();
        getPokemonCardUrl();
    }
} else if (today <= 20) {
    function getRandom() {
        reset();
        getPokemonCardUrl();
        getPokemonCardUrl();
    }
} else {
    function getRandom() {
        reset();
        getPokemonCardUrl();
        getPokemonCardUrl();
        getPokemonCardUrl();
    }
}

const getPokemon = document.getElementById('getRandom');
getPokemon.addEventListener('click', getRandom);

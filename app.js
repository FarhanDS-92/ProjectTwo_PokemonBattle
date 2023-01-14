// create namespaced object that contains pokemon team of 3 pokemon(call that two times.once for player, once for opponent)
const pokemon = {};

//     define endpoint
//     filter array down to 3 types(water, fire, grass)
pokemon.urls = ['https://pokeapi.co/api/v2/type/10/', 'https://pokeapi.co/api/v2/type/11/', 'https://pokeapi.co/api/v2/type/12/'];
pokemon.urlPokeSprite = ['https://pokeapi.co/api/v2/pokemon/'];

// fetch url
const myResult = pokemon.urls.map((url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            // console.log(data.pokemon[0]);
            return data;
        })
});


//     provide randomized pokemon, 1 from each type, to the function in the form of an array
// Function to give 3 random pokemons from each of the three types
pokemon.teamCreator = function(pokedata) {
    // console.log(pokedata);
    const pokemonTeam = pokedata.map(data => {
        // console.log(data.pokemon);
        // const randomPokemon = data.pokemon[getRandomInt(data.pokemon.length)];
        return data.pokemon[getRandomInt(data.pokemon.length)];
        // return randomPokemon;
        // console.log(randomPokemon);
    });
    console.log(pokemonTeam);
    const pokemonTeamNames = pokemonTeam.map(data => {
        return data.pokemon.name;
    })
    console.log(pokemonTeamNames);
}

Promise.all(myResult)
    .then(pokedata => {
        console.log(pokedata);
        pokemon.teamCreator(pokedata);

        // CURRENTLY NOT BEING USED - create a full array with all 3 pokemon types
        // const fullArray = [];
        // fullArray.push(...pokedata[0].pokemon, ...pokedata[1].pokemon, ...pokedata[2].pokemon);
        // console.log(fullArray);

        // select enemy pokemon
        pokemon.enemyPoke(pokedata);
    });

pokemon.enemyPoke = function(pokedata) {
        const chosenObj = pokedata[getRandomInt(3)];
        const randomChoice = getRandomInt(chosenObj.pokemon.length);
        const finalPoke = chosenObj.pokemon[randomChoice];
        console.log(finalPoke.pokemon.name);
        finalPokeType = chosenObj.name;
        enemyDisplayer(finalPoke, finalPokeType);
    }
    // Function to display enemy pokemon
const enemyDisplayer = function(finalPoke, finalPokeType) {
    const enemyName = (finalPoke.pokemon.name);
    const enemyPic = document.querySelectorAll('.enemyPic');
    console.log(enemyPic[0]);

    fetch(`https://pokeapi.co/api/v2/pokemon/${enemyName}`)
        .then((response) => {
            return response.json();
        }).then(data => {
            console.log(data);
            const sprites = data.sprites;
            const spritesURL = sprites.other.home.front_default;
            enemyPic[0].src = spritesURL;
            enemyPic[1].src = spritesURL;
            enemyPic[2].src = spritesURL;
        })
        .catch(error => console.error(error));
    const enemyTypeSpan = document.querySelector(".enemyType");
    enemyTypeSpan.textContent = `${finalPokeType}`;
    const enemyNameSpan = document.querySelector(".enemyName");
    enemyNameSpan.textContent = `${finalPoke.pokemon.name}`;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// if you need to access multiple promises (no need if you only have one):



//     pull sprites for pokemon in the array
//         show opponent's pokemon f

// write an 'if' function that explains the rules:
//     water beats fire
//     fire beats grass
//     grass beats water
//         explain these rules to the player(hardcoded in html)

// write a function that randomly selects a pokemon from the opponent's roster and presents it to the player
//     show the sprite image(of the front of the opponent's pokemon) to the player

// then allow player to choose their pokemon
//     1) create a ul
// 2) populate it with 3 li elements, that contain the player's pokemon (name and type)
// 3) append it to the ul / display on page
// 4) create a click eventlistener to allow the player to make the selection

// create a display of the two opposing pokemon in the battle(player's choice vs the opponent's)

// create a paragraph tag that states the winner in the header of the page
//     (stretch goal: create a simple animation that shows the winner moving)



// Function to have the rulebox pop up on the start page
const ruleDisplayer = function() {
    const starterDiv = document.querySelector(".bg-image");
    const ruleBox = document.querySelector(".box2");
    const ruleBoxDisplay = ruleBox.style;

    starterDiv.addEventListener('click', () => {
        ruleBox.style.display = 'flex';
        ruleBox.classList.add("boxAppear");
    });
}

ruleDisplayer();


pokemon.init = function() {};
pokemon.init();


// OLD CODE - IGNORE
// pokemon.playerTeamCreator = function(pokedata) {
//     const fireChoice = pokedata[0].pokemon;
//     // const waterChoice = pokedata[1];
//     // const grassChoice = pokedata[2];
//     console.log(fireChoice);
//     const randomFire = fireChoice[getRandomInt(fireChoice.length)];
//     console.log(randomFire);
// }
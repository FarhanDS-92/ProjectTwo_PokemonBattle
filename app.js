// create namespaced object that contains pokemon team of 3 pokemon(call that two times.once for player, once for opponent)
const pokemon = {};


//     define endpoint
//     filter array down to 3 types(water, fire, grass)
pokemon.urls = ['https://pokeapi.co/api/v2/type/10/', 'https://pokeapi.co/api/v2/type/11/', 'https://pokeapi.co/api/v2/type/12/'];
pokemon.urlPokeSprite = ['https://pokeapi.co/api/v2/pokemon/'];


// fetch url
const myResult = pokemon.urls.map( (url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
});

Promise.all(myResult)
    .then(pokedata => {
        console.log(pokedata);
        pokemon.enemyPoke(pokedata);
    })

//     provide randomized pokemon, 1 from each type, to the function in the form of an array

pokemon.enemyPoke = function(pokedata){
    const chosenObj = pokedata[getRandomInt(3)];
    const randomChoice = getRandomInt(chosenObj.pokemon.length);
    const finalPoke = chosenObj.pokemon[randomChoice];
    console.log(finalPoke);
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






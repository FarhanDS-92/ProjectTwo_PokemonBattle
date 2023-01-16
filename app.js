// create namespaced object that contains pokemon team of 3 pokemon(call that two times.once for player, once for opponent)
const pokemon = {};
const playerSprite = document.querySelector('.ashImg');
const pqS = document.querySelector('.playerType');

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
            return data;
        })
});

// provide randomized pokemon, 1 from each type, to the function in the form of an array
// Function to give 3 random pokemons from each of the three types

//onclick function to help with showing/hiding pokemon menu selection
function hideFunction() {
    document.getElementById("menu").style.display = "flex";
}



// function to append menu selection
pokemon.teamCreator = function(playerTypePoke, type) {

    const pokeUrl = playerTypePoke.pokemon.url;

    const title = document.createElement('h3');
    title.innerText = playerTypePoke.pokemon.name.toUpperCase();

    const pokeType = document.createElement('p');
    pokeType.innerText = type.toUpperCase();
    
    const image = document.createElement('img');
    image.src = '';
    image.alt = playerTypePoke.pokemon.name;
    image.classList.add(`${type}${type}`)
 
 

    if (type === "fire"){
        const fq = document.querySelector('.fire')
        fq.appendChild(title);
        fq.appendChild(image);
        fq.appendChild(pokeType);

        fetch(pokeUrl)
            .then(results => {
                return results.json();
            }).then(data => {
                const sprite = data.sprites.other["official-artwork"].front_default;
                const fqI = document.querySelector('.firefire');
                fqI.src = sprite;
            });

    } else if (type === "water"){
        const wq = document.querySelector('.water')
        wq.appendChild(title);
        wq.appendChild(image);
        wq.appendChild(pokeType);

        fetch(pokeUrl)
            .then(results => {
                return results.json();
            }).then(data => {
                const sprite = data.sprites.other["official-artwork"].front_default;
                const wqI = document.querySelector('.waterwater');
                wqI.src = sprite;
            });
    } else if (type === "grass"){
        const gq = document.querySelector('.grass')
        gq.appendChild(title);
        gq.appendChild(image);
        gq.appendChild(pokeType);

        fetch(pokeUrl)
            .then(results => {
                return results.json();
            }).then(data => {
                const sprite = data.sprites.other["official-artwork"].front_default;
                const gqI = document.querySelector('.grassgrass');
                gqI.src = sprite;
            });
    }
}

//event listener to replace image to the player image to that of the chosen pokemon
pokemon.EventListenerMenu = function (playerTypePoke) {

    document.querySelector('.fire').addEventListener('click', function () {
        const fqI = document.querySelector('.firefire');
        playerSprite.src = fqI.src;
        playerSprite.alt = fqI.alt;

        const fNqI = document.querySelector('.ashName');
        fNqI.innerText = fqI.alt.toUpperCase();

        document.getElementById("menu").style.display = "none";

        const fqS = document.querySelector(".playerType");
        fqS.innerText = "fire";

        const fightButton = document.querySelector(".button");
        fightButton.style.display = "flex"


    });
    document.querySelector('.water').addEventListener('click', function () {
        const wqI = document.querySelector('.waterwater');
        playerSprite.src = wqI.src;
        playerSprite.alt = wqI.alt;

        const wNqI = document.querySelector('.ashName');
        wNqI.innerText = wqI.alt.toUpperCase();

        document.getElementById("menu").style.display = "none";

        const wqS = document.querySelector(".playerType");
        wqS.innerText = "water";

        const fightButton = document.querySelector(".button");
        fightButton.style.display = "flex"

    });
    document.querySelector('.grass').addEventListener('click', function () {
        const gqI = document.querySelector('.grassgrass');
        playerSprite.src = gqI.src;
        playerSprite.alt = gqI.alt;

        const gNqI = document.querySelector('.ashName');
        gNqI.innerText = gqI.alt.toUpperCase();

        document.getElementById("menu").style.display = "none";

        const gqS = document.querySelector(".playerType");
        gqS.innerText = "grass";

        const fightButton = document.querySelector(".button");
        fightButton.style.display = "flex"

    });
}


Promise.all(myResult)
    .then(pokedata => {


        //storing values to use for later
        const pokeTypeF = pokedata[0].name;
        const pokeTypeW = pokedata[1].name;
        const pokeTypeG = pokedata[2].name;


        const playerFirePoke = pokedata[0].pokemon[getRandomInt(50)];
        const playerWaterPoke = pokedata[1].pokemon[getRandomInt(50)];
        const playerGrassPoke = pokedata[2].pokemon[getRandomInt(50)];

        pokemon.teamCreator(playerFirePoke, pokeTypeF);
        pokemon.teamCreator(playerWaterPoke, pokeTypeW);
        pokemon.teamCreator(playerGrassPoke, pokeTypeG);

        pokemon.EventListenerMenu(playerFirePoke);
        pokemon.EventListenerMenu(playerWaterPoke);
        pokemon.EventListenerMenu(playerGrassPoke);

        
        // CURRENTLY NOT BEING USED - create a full array with all 3 pokemon types
        // const fullArray = [];
        // fullArray.push(...pokedata[0].pokemon, ...pokedata[1].pokemon, ...pokedata[2].pokemon);
        // console.log(fullArray);

        // select enemy pokemon
        pokemon.enemyPoke(pokedata);
    });



pokemon.enemyPoke = function(pokedata) {
        const chosenObj = pokedata[getRandomInt(3)];
        const randomChoice = getRandomInt(50);
        const finalPoke = chosenObj.pokemon[randomChoice];
        
        finalPokeType = chosenObj.name;
        console.log(finalPokeType);
        enemyDisplayer(finalPoke, finalPokeType);

        return finalPokeType
    }

    // Function to display enemy pokemon
const enemyDisplayer = function(finalPoke, finalPokeType) {
    const enemyName = (finalPoke.pokemon.name);
    const enemyPic = document.querySelectorAll('.enemyPic');
    

    fetch(`https://pokeapi.co/api/v2/pokemon/${enemyName}`)
        .then((response) => {
            return response.json();
        }).then(data => {
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
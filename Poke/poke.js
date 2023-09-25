const pokecard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeimg = document.querySelector('[data-poke-img]');
const pokeimgcont = document.querySelector('[data-poke-img-container]');
const pokeid = document.querySelector('[data-poke-id]');
const poketype = document.querySelector('[data-poke-types]');
const pokestats = document.querySelector('[data-poke-stats]');

const typecolors = {
    electric : '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#05967C',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA277D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
}

const searchPkmn = event =>{
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(res => renderPokemonData(res))
    .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeimg.setAttribute('src', sprite);
    pokeid.textContent = `Nº ${data.id}`
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}

const setCardColor = types => {
    const color1 = typecolors[types[0].type.name];
    const color2 = types [1] ? typecolors[types[1].type.name] : typecolors.default;
    pokeimg.style.background = `radial-gradient(${color2} 33%, ${color1} 33%)`;
    pokeimg.style.backgroundSize = '5px 5px';
}

const renderPokemonTypes = types =>{
    poketype.innerHTML = '';
    types.forEach(type => {
        const typeElement = document.createElement("div");
        typeElement.style.color = typecolors[type.type.name];
        typeElement.textContent = type.type.name;
        poketype.appendChild(typeElement);
    })
}

const renderPokemonStats = stats =>{
    pokestats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokestats.appendChild(statElement);
    })
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeimg.setAttribute('src', 'poke-shadow.png');
    pokeimg.style.background = '#fff';
    poketype.innerHTML = '';
    pokestats.innerHTML = '';
    pokeid.textContent = '';
}
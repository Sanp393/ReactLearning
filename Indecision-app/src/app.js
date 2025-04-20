console.log('App.js is running!')

const pokemon = {
    name: 'Charizard',
    preEvolution: 'Charmeleon',
    type: []
};

// JSX - JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        pokemon.type.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

const eraseTypeList =  () => {
    pokemon.type = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * pokemon.type.length);
    const option = pokemon.type[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{pokemon.name}</h1>
            {pokemon.preEvolution && <p>PreEvolution: {pokemon.preEvolution}</p>}
            <p>{pokemon.type.length > 0 ? 'Types: ' + pokemon.type[0] : 'Unknown'}</p>
            <p>{pokemon.type.length}</p>
            <button disabled={pokemon.type.length === 0} onClick={onMakeDecision}>What sould Ido?</button>
            <button onClick={eraseTypeList}>Remove all!</button>
            <ol>
                {
                    pokemon.type.map((type) => <li key={type}>{type}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option!</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();

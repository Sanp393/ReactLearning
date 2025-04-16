console.log('App.js is running!')

// create app object title/subtitle.
// use title/subtitle in the template.
// render template.

var pokemon = {
    name: 'Charizard',
    type: 'Fire & Flying' 
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.type}</p>
        <ol>
            <li>Flamethrower</li>
            <li>Flying</li>
            <li>Dragon dance</li>
            <li>Dragon claw</li>
        </ol>
    </div>
);

var user = {
    name: 'Guille',
    age: 26,
    location: 'Barcelona'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}.</p>
        <p>Location: {user.location}.</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
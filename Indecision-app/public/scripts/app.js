'use strict';

console.log('App.js is running!');

// create app object title/subtitle.
// use title/subtitle in the template.
// render template.

var pokemon = {
    name: 'Charizard',
    type: 'Fire & Flying'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        pokemon.name
    ),
    React.createElement(
        'p',
        null,
        pokemon.type
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Flamethrower'
        ),
        React.createElement(
            'li',
            null,
            'Flying'
        ),
        React.createElement(
            'li',
            null,
            'Dragon dance'
        ),
        React.createElement(
            'li',
            null,
            'Dragon claw'
        )
    )
);

var user = {
    name: 'Guille',
    age: 26,
    location: 'Barcelona'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age,
        '.'
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location,
        '.'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

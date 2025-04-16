'use strict';

console.log('App.js is running!');

var pokemon = {
    name: 'Charizard',
    preEvolution: 'Charmeleon',
    type: []
};

// JSX - JavaScript XML
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        pokemon.type.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var eraseTypeList = function eraseTypeList() {
    pokemon.type = [];
    renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            pokemon.name
        ),
        pokemon.preEvolution && React.createElement(
            'p',
            null,
            'PreEvolution: ',
            pokemon.preEvolution
        ),
        React.createElement(
            'p',
            null,
            pokemon.type.length > 0 ? 'Types: ' + pokemon.type[0] : 'Unknown'
        ),
        React.createElement(
            'p',
            null,
            pokemon.type.length
        ),
        React.createElement(
            'button',
            { onClick: eraseTypeList },
            'Remove all!'
        ),
        React.createElement(
            'ol',
            null,
            pokemon.type.map(function (type) {
                return React.createElement(
                    'li',
                    { key: type },
                    type
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option!'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();

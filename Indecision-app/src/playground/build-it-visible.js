const appRoot = document.getElementById('app');
let visibility = false;

const changeVisibility = () => {
    visibility = !visibility;
    renderTemplate();
};

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeVisibility}>{visibility ? 'Hide details' : 'Show details!'}</button>
            {visibility && (
                <div>
                    Not 2 much info!
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
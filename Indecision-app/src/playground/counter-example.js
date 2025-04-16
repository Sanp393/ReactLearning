let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();
    console.log(count);
};
const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCounterApp();
    console.log(count);
}
const reset = () =>{
    console.log('reset');
    count = 0;
    renderCounterApp();
    console.log(count);
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1!</button>
            <button onClick={minusOne}>-1!</button>
            <button onClick={reset}>Reset count!</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
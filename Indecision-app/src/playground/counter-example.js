class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne() {

    }

    handleMinusOne() {

    }

    handleReset() {

    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1!</button>
                <button onClick={this.handleMinusOne}>-1!</button>
                <button onClick={this.handleReset}>Reset!</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/*let count = 0;
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

renderCounterApp();*/
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {}
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {}
    }, {
        key: 'handleReset',
        value: function handleReset() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: '
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1!'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1!'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset!'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        }
    }

    render() {
        console.log('counter component is rendering')
        return (
            <>
                <button onClick={() => this.buttonState(1)}>+</button>
                <p>{this.state.count}</p>
                <button onClick={() => this.buttonState(-1)}>-</button>
            </>
        )
    }

    buttonState(amount) {

        this.setState({
            count: this.state.count + amount
        })
        this.setState(prevState => {
            return ({count: prevState.count + amount})
        })
    }
}

export default Counter;

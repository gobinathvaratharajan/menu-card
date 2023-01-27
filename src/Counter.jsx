import React, { Component } from 'react';
import { ThemeContext } from './App';

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
            <ThemeContext.Consumer>
                {style => (
                    <>
                        <button style={style} onClick={() => this.buttonState(1)}>+</button>
                        <p>{this.state.count}</p>
                        <button style={style} onClick={() => this.buttonState(-1)}>-</button>
                    </>
                )}
            </ThemeContext.Consumer>
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

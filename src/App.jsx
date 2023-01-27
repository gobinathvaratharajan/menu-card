import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        theme: 'red'
    }
  }
  themeButton() {
    this.setState(({theme}) => ({theme: theme === 'red' ? 'blue' : 'red'}))
  }

  // const [theme, setTheme] = useState('red');
  // <button onClick={() => setTheme(prevState => prevState === 'red' ? 'blue' : 'red')}>Theme Toggle</button>


  render() {
    const { theme } = this.state;
    console.log('app is rendering')
    return (
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        <div>Counter</div>
        <Counter initialCount={20} />
        <div>CounterHooks</div>
        <CounterHooks initialCount={24} />
        <div>Theme</div>
        <button theme={this.state.theme} onClick={() => this.themeButton()}>Theme Toggle</button>
      </ThemeContext.Provider>
    )
  }

}

export default App

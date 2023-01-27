import { Component } from 'react'
import './App.css'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

class App extends Component {
  render() {
    console.log('app is rendering')
    return (
      <>
        <div>Counter</div>
        <Counter initialCount={20} />
        <div>CounterHooks</div>
        <CounterHooks initialCount={24} />
      </>
    )
  }
}

export default App

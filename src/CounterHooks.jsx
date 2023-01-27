import { useState, useContext } from "react";
import { ThemeContext } from "./App";

function CounterHooks({ initialCount }) {
    console.log('Render Hooks')
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)

    function buttonState(amt) {
        setCount((prevState) => prevState + amt)
    }
    return (
        <>
            {console.log(style, 'style')}
            <button style={style} onClick={() => buttonState(1)}>+</button>
            <p>{count}</p>
            <button style={style} onClick={() => buttonState(-1)}>-</button>
        </>
    )
}

export default CounterHooks;

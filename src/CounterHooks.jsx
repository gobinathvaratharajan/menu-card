import { useState } from "react";

function CounterHooks({ initialCount }) {
    console.log('Render Hooks')
    const [count, setCount] = useState(initialCount)

    function buttonState(amt) {
        setCount((prevState) => prevState + amt)
    }
    return (
        <>
            <button onClick={() => buttonState(1)}>+</button>
            <p>{count}</p>
            <button onClick={() => buttonState(-1)}>-</button>
        </>
    )
}

export default CounterHooks;

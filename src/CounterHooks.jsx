import { useState } from "react";

function CounterHooks({ initialCount }) {
    console.log('Render Hooks')
    const [count, setCount] = useState(initialCount)
    return (
        <>
            <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
        </>
    )
}

export default CounterHooks;

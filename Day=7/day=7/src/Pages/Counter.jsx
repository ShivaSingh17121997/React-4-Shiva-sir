

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 11111110)
    }

    return <>
        <h1>{count}</h1>
        <button onClick={handleAdd} >Add</button>
        <button onClick={() => setCount(count - 9876)} > Decrease </button>

    </>
}

export default Counter;
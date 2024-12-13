import { useState } from "react"

export default function Testing(){

    const [count,setCount] = useState(0);

    function increment(){
        console.log("increment");
        setCount(count + 1);
    }

    function decrement(){
        console.log("Decrement");
        setCount(count - 1);
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )

}
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
        <div className="h-64 gap-3 w-64 flex justify-center items-center border border-black">
            <button className="w-20 text-4xl h-20 rounded-full bg-red-400 cursor-pointer" onClick={decrement}>-</button>
            <span className="text-4xl">{count}</span>

            <button className="w-20 h-20 text-4xl rounded-full bg-red-400 cursor-pointer" onClick={increment}>+</button>
        </div>
    )

}
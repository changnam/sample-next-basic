'use client';

import {useState} from "react";

export default function Counter(){
    console.log("Counter 시작");
    const [count, setCount] = useState(0);

    return (
        <>
            <div >Count: {count}</div>
            <button onClick={() => setCount((prev)=> prev + 1)}>클릭</button>
        </>
    )
}
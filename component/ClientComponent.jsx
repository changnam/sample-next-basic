"use client";
import {useState} from "react";

export default function Composite({children}){
    const [show,setShow] = useState(false);

    return(
        <>
            <button onClick={() => setShow(!show)}>보이기</button>
            {show && children}
        </>
    )
}
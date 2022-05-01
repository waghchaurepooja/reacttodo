
import { useState, useEffect } from "react";

export const TodoInput = ({getDataFn}) =>{
    const [Text, setText] = useState("")
    // console.log('Text:', Text)
    return (
        <div className="AddInputButtonBox">
            <button className="AddInputButton" onClick={() =>{
                getDataFn(Text);
            }}>+</button>
            <input className="AddInput" type="text" placeholder="Add a to do....." onChange={(event) =>{
                setText(event.target.value);
            }}/>
        </div>
    )
}
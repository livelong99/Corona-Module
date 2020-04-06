import React from "react";
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

export default function myth() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img alt="Myth Busters" src={"./Images/aware/myth/myth"+(num)+".jpg"} />)
        })}
        </div>
    )
}
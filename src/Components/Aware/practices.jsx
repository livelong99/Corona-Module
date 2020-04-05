import React from "react";
const number = [1,2,3,4,5,6,7];

export default function practice() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img src={"./Images/aware/practice/practices0"+num+".png"} />)
        })}
        </div>
    )
}
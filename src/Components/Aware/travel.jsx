import React from "react";
const number = [1,2,3,4];

export default function travel() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img src={"./Images/aware/travel/travel0"+num+".png"} />)
        })}
        </div>
    )
}
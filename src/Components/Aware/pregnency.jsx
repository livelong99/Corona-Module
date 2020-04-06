import React from "react";
const number = [1,2,3,4,5,6];

export default function pregnent() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img alt="Pregnancy Care" src={"./Images/aware/pregnant/pregnancy0"+num+".png"} />)
        })}
        </div>
    )
}
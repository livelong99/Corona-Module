import React from "react";
const number = [1,2];

export default function stress() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img Alt="Stress" src={"./Images/aware/stress/stress0"+num+".jpg"} />)
        })}
        </div>
    )
}
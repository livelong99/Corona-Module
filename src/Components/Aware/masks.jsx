import React from "react";
const number = [1,2,3,4,5,6,7];

export default function masks() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img src={"./Images/aware/masks/masks-"+num+".jpg"} />)
        })}
        </div>
    )
}
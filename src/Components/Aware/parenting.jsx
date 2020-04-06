import React from "react";
const number = [1,2,3,4,5,6];

export default function parent() {
    return(
        <div className="awareI">
        {number.map((num) =>{
            return (<img alt="Parental Care" src={"./Images/aware/Parenting/parenting0"+num+".jpg"} />)
        })}
        </div>
    )
}
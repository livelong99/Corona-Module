import React from "react"
import Tabs from "./IndiaTabs";
import Total from "./Total";


function India() {
    return(
        <div>
            <div className="logoBack"></div>
            <div className="logo">
                <img src="./Images/India.png" style={{width:300}} alt= "World"></img>
            </div>
            <Total />
            <Tabs />
        </div>   
    )
}

export default India;
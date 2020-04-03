import React from "react"
import Tabs from "./IndiaTabs";
import Total from "./Total";


function India() {
    return(
        <div>
            <div className="Indialogo">
                <img src="./Images/India.png"  alt= "World"></img>
            </div>
            <Total />
            <Tabs />
        </div>   
    )
}

export default India;
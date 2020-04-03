import React from "react";
import Tabs from "./Tabs";
import Total from "./WorldRecord";

function World() {
    return (
        <div>
            <div className="Worldlogo">
                <img src="./Images/World.png" alt="India"></img>
            </div>
            <Total />
            <Tabs />
        </div>
    )
}

export default World;
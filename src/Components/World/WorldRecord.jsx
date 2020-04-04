import React, { useState, useContext } from "react";
import {WorldFullContext} from '../Store';


function World (props) {
    const [wTotal, setWorldTotal] = useContext(WorldFullContext);  

    return (
        <div className="total">
            <ul>
                <li className="orange">
                    <img src="./Images/icon-infected.png" alt="infected"></img>
                    <strong>{wTotal.cases}</strong>
                    <span>Total Cases</span>
                </li>
                <li className="green">
                    <img src="./Images/icon-inactive.png" alt="safe"></img>
                    <strong>{wTotal.recovered}</strong>
                    <span>Cured/Dischrged</span>
                </li>
                <li className="red">
                    <img src="./Images/icon-death.png" alt="dead"></img>
                    <strong>{wTotal.deaths}</strong>
                    <span>Deaths</span>
                </li>
                <li className="blue">
                    <img src="./Images/icon-active.png" alt="active"></img>
                    <strong>{wTotal.active}</strong>
                    <span>Active Cases</span>
                </li>
            </ul>
        </div>
    );
}

  
  
  export default (World);

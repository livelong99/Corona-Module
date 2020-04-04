import React, { useState, useContext } from "react";
import axios from "axios";
import {WorldFullContext} from '../Store';


function World (props) {
    const [wTotal, setWorldTotal] = useContext(WorldFullContext);
    const WTotal = async () => {
        const rec = await axios({
            "method":"GET",
            "url":"https://corona.lmao.ninja/all"
            })
        .then((response)=>{
            const Timeline = response.data;
            setWorldTotal(Timeline);
        })
        .catch((error)=>{
            console.log(error)
    });
    }
    
    if(wTotal.length === 0)
        WTotal();

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

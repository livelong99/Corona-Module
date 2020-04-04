import React, { useContext } from 'react';
import {IndiaFullContext} from '../Store';
import axios from "axios";


function Total(props) {

    const [indTotal, setIndTotal] = useContext(IndiaFullContext);

    return(
        <div className="total">
            <ul>
                <li className="orange">
                    <img src="./Images/icon-infected.png" alt="infected"></img>
                    <strong>{indTotal.cases}</strong>
                    <span>Total Cases</span>
                </li>
                <li className="green">
                    <img src="./Images/icon-inactive.png" alt="safe"></img>
                    <strong>{indTotal.recovered}</strong>
                    <span>Cured/Dischrged</span>
                </li>
                <li className="red">
                    <img src="./Images/icon-death.png" alt="dead"></img>
                    <strong>{indTotal.deaths}</strong>
                    <span>Deaths</span>
                </li>
                <li className="blue">
                    <img src="./Images/icon-active.png" alt="active"></img>
                    <strong>{indTotal.active}</strong>
                    <span>Active Cases</span>
                </li>
            </ul>
        </div>
    )

}

  
  
  export default (Total);
import React, { useContext } from "react";
import axios from "axios";
import {WorldFullContext} from '../Store';


function World () {
    const [wTotal, setWorldTotal] = useContext(WorldFullContext);
    const WTotal = async () => {
        const rec = await axios({
            "method":"GET",
            "url":"https://corona.lmao.ninja/all"
            })
        .then((response)=>{
            const Timeline = response.data;
            return Timeline;
        })
        .catch((error)=>{
            console.log(error)
    });
    setWorldTotal(rec);
    }
    
    if(wTotal.length === 0)
        WTotal();
        const nfObject = new Intl.NumberFormat('en-US');

    return (
        <div className="total">
            <ul>
                <li className="orange">
                    <img src="./Images/icon-infected.png" alt="infected"></img>
                    <strong>{nfObject.format(parseInt(wTotal.cases))}</strong>
                    <span>Total Cases</span>
                </li>
                <li className="green">
                    <img src="./Images/icon-inactive.png" alt="safe"></img>
                    <strong>{nfObject.format(parseInt(wTotal.recovered))}</strong>
                    <span>Cured/Dischrged</span>
                </li>
                <li className="red">
                    <img src="./Images/icon-death.png" alt="dead"></img>
                    <strong>{nfObject.format(parseInt(wTotal.deaths))}</strong>
                    <span>Deaths</span>
                </li>
                <li className="blue">
                    <img src="./Images/icon-active.png" alt="active"></img>
                    <strong>{nfObject.format(parseInt(wTotal.active))}</strong>
                    <span>Active Cases</span>
                </li>
            </ul>
        </div>
    );
}

  
  
  export default (World);

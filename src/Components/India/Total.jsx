import React, { useContext } from 'react';
import {IndiaFullContext} from '../Store';
import axios from "axios";


function Total(props) {

    const [indTotal, setIndTotal] = useContext(IndiaFullContext);

    const ITotal = async () => {
        const rec = await axios({
            "method":"GET",
            "url":"https://corona.lmao.ninja/countries/India"
            })
            .then((response)=>{
                const Timeline = response.data;
                return Timeline;
            })
            .catch((error)=>{
                console.log(error)
            });
            setIndTotal(rec);
    }
    if(indTotal.length === 0)
        ITotal();
    const nfObject = new Intl.NumberFormat('en-US');

    return(
        <div className="total">
            <ul>
                <li className="orange">
                    <img src="./Images/icon-infected.png" alt="infected"></img>
                    <strong>{nfObject.format(parseInt(indTotal.cases))}</strong>
                    <span>Total Cases</span>
                </li>
                <li className="green">
                    <img src="./Images/icon-inactive.png" alt="safe"></img>
                    <strong>{nfObject.format(parseInt(indTotal.recovered))}</strong>
                    <span>Cured/Dischrged</span>
                </li>
                <li className="red">
                    <img src="./Images/icon-death.png" alt="dead"></img>
                    <strong>{nfObject.format(parseInt(indTotal.deaths))}</strong>
                    <span>Deaths</span>
                </li>
                <li className="blue">
                    <img src="./Images/icon-active.png" alt="active"></img>
                    <strong>{nfObject.format(parseInt(indTotal.active))}</strong>
                    <span>Active Cases</span>
                </li>
            </ul>
        </div>
    )

}

  
  
  export default (Total);
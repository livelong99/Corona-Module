import React, { useState } from "react";
import axios from "axios";

function World () {
    const [total, setTotal] = useState({});

    const SetT = async () => {
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
    setTotal(rec);
   }

    SetT();

    return (
        <div className="total">
            <ul>
                <li className="orange">
                    <img src="./Images/icon-infected.png" alt="infected"></img>
                    <strong>{total.cases}</strong>
                    <span>Total Cases</span>
                </li>
                <li className="green">
                    <img src="./Images/icon-inactive.png" alt="safe"></img>
                    <strong>{total.recovered}</strong>
                    <span>Cured/Dischrged</span>
                </li>
                <li className="red">
                    <img src="./Images/icon-death.png" alt="dead"></img>
                    <strong>{total.deaths}</strong>
                    <span>Deaths</span>
                </li>
                <li className="blue">
                    <img src="./Images/icon-active.png" alt="active"></img>
                    <strong>{total.active}</strong>
                    <span>Active Cases</span>
                </li>
            </ul>
        </div>
    );
}

export default World;
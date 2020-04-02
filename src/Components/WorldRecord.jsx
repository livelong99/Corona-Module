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
    
    setInterval(SetT, 1000000);

    return (
        <div className="total">
            <p><b>Total Cases :</b> {total.cases}</p>assdaa
            <p style={{"color":"red"}}><b>Total Deaths :</b> {total.deaths}</p>
            <p style={{"color":"green"}}><b>Total Recoveries:</b> {total.recovered} </p>
            <p><b>Active Cases:</b> {total.active} </p>
        </div>
    );
}

export default World;
import React from "react";
import axios from "axios";



const Total = async () => {
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
        return await rec;
}


export default Total;
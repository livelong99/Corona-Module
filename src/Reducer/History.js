import React from "react";
import axios from "axios";


const History = async () => {
    const rec = await axios({
    "method": "get",
    "url": "https://corona.lmao.ninja/v2/historical"})
    .then((response)=>{
        const Timeline = response.data;
        return Timeline;
    })
    .catch((error)=>{
        console.log(error)
});
return rec;
}


export default History;
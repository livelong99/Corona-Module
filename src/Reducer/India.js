import React from "react";
import axios from "axios";


  
const India = async () => {
    const rec = await axios({
        "method":"GET",
        "url":"https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",
        })
    .then((response)=>{
        const Timeline = response.data.data.statewise;
        return Timeline;
    })
    .catch((error)=>{
        console.log(error)
});
return await rec;
}


export default India;
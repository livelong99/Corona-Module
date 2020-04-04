import React from "react";
import axios from "axios";

const Total = async () => {
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
return rec ;
}

const Run = async () => {
    const n = await Total();
    console.log(n);
}

Run();

export default Total;
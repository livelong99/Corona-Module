import React from "react";
import ReactDom from "react-dom";
import Store from "./Components/Store";
import App from "./Components/App";


ReactDom.render(
    <Store>
        <App />
    </Store>,
    document.getElementById("root")
)
// fetch("https://corona.lmao.ninja/countries/India")
//     .then(res => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// console.log(n);

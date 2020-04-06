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
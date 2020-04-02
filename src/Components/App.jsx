import React from "react";
import Header from "./Header";


import Menu from "./Menu";
import Tabs from "./Tabs";
import World from "./WorldRecord";
//import India from "./IndiaTabs";

function App() {
    return (
        <div>
            <Menu />
            <Header />
            {/* {<div className="container">} */}
            <Tabs />
            {/* <India /> */}
            <World />
            {/* {</div>} */}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
import React, { useState } from "react";
import Header from "./Header";


import Menu from "./Menu";
import Tabs from "./Tabs";
import World from "./WorldRecord";
import India from "./IndiaTabs";

function App() {

    const [show, setShow] = useState(1);

    function whatToShow(k) {
        setShow(k);
    }

    function display()
    {
        if(show===1)
            return (<Tabs />);
        else if(show===2)
            return (<India />);
    }


    return (
        <div>
            <Menu toShow={whatToShow} />
            <Header />
            {/* {<div className="container">} */} 
            <World />
            {display()}
            {/* {</div>} */}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
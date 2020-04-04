import React, { useState } from "react";
import Menu from "./Menu"
import Header from "./Header";
import India from "./India";
import World from "./World";

function App() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(1);

    function whatToShow(k) {
        setShow(k);
    }

    function display()
    {
        if(show===1)
            return (<World />);
        else if(show===2)
            return (<India />);
    }


    return ( 
        <div>
            <Menu toShow={whatToShow} />
            <Header />
            {display()}
            {/* <Footer /> */}
        </div>
    );
}

export default App;

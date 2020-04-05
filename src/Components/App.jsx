import React, { useState } from "react";
import Menu from "./Menu"
import Header from "./Header";
import India from "./India";
import World from "./World";
import Aware from "./Aware";
import Help from "./Helpline/index";

function App() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(4);

    function whatToShow(k) {
        setShow(k);
    }

    function display()
    {
        if(show===1)
            return (<World />);
        else if(show===2)
            return (<India />);
        else if(show===3)
            return (<Aware />);
        else if(show===4)
            return (<Help />);
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

import React, { useState } from "react";
import Menu from "./Menu"
import Header from "./Header";
import India from "./India";
import World from "./World";
import Aware from "./Aware";
import Help from "./Helpline";
import About from "./About";

function App() {
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
        else if(show===3)
            return (<Aware />);
        else if(show===4)
            return (<Help />);
        else if(show===5)
            return (<About/>)
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

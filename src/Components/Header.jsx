import React from "react";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import dimensions from "./Dimensions";



const Header = () => {
    const {width} = dimensions();
    if(width<430)
        return(<header>
            <h1 style={{fontSize:"190%"}}><LocalHospitalIcon /> <b> Corona Tracker</b></h1>
        </header>)
    else
        return(<header>
            <h1><LocalHospitalIcon /> <b> Corona Tracker</b></h1>
        </header>)
}

export default Header;
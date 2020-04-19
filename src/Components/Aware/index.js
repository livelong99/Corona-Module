import React, {useState} from "react"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Mask from "./masks";
import Travel from "./travel";
import Practice from "./practices";
import Pregnent from "./pregnency";
import Stress from "./stress";
import Parent from "./parenting";
import Myth from "./myth";
import Safe from "./safe";

const useStyles = makeStyles((theme) => ({
    formControl: {
      position:"relative",
      margin: "auto",
      top:100,
      left:"28.5%",
      width:"50%",
      height:100,
      minWidth: 120,
      maxWidth:600,
      borderRadius:10,
      backgroundColor:"white",
      zIndex:1,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
        margin:"auto",
        width:"70%"
    }
  }));

export default function Aware() {
    const classes = useStyles();
    const [aware, setAware] = useState(0);

    function show() {
        if(aware===0)
            return(
                <Safe />
            );
        else if(aware===1)
            return(
                <Practice />
            )
        else if(aware===2)
            return (
                <Myth />
            )
        else if(aware===3)
            return(
                <Mask />
            )
        else if(aware===4)
            return(
                <Parent /> 
            )
        else if(aware===5)
            return(
                <Stress />
            )
        else if(aware===6)
            return(
                <Travel />
            )
        else if(aware===7)
            return(
                <Pregnent />
            )    
    }

    function handleChange(event) {
        setAware(event.target.value);
      }
    

    return (<div>
        <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          className={classes.select}
          labelId="SelectChart"
          id="demo-simple-select"
          value={aware}
          onChange={handleChange}
        >
          <MenuItem value={0}>{"Stay Safe"}</MenuItem>
          <MenuItem value={1}>{"General Practices"}</MenuItem>
          <MenuItem value={2}>{"Myth Busters"}</MenuItem>
          <MenuItem value={3}>{"How to Use Masks"}</MenuItem>
          <MenuItem value={4}>{"Parental Care"}</MenuItem>
          <MenuItem value={5}>{"Coping with Stress"}</MenuItem>
          <MenuItem value={6}>{"Travelling Practices "}</MenuItem>
          <MenuItem value={7}>{"Pregnancy Care"}</MenuItem>
        </Select>
      </FormControl>
      {show()}
      </div>
    )
    

}

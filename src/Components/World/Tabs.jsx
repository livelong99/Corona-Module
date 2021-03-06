import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {WorldContext} from '../Store';
import axios from "axios";
import Graph from "./Graph";
import dimensions from "../Dimensions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
    position:"relative",
    top:500,
    overflowX:"scroll",
    width:"100%",
    borderRadius: 10,
    maxWidth: 1300,
    margin: "auto",
    zIndex: -1,
    marginBottom: 20,
    paddingBottom:60
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width:"33%",
    maxWidth:220,
  },
}));

function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0); 
  const [world, setWorld] = useContext(WorldContext);
  const {width} = dimensions();
  

  const World =  async () => {
    const rec = await axios({
        "method":"GET",
        "url":"https://corona.lmao.ninja/v2/countries",
        "params":{
        "sort":"cases"
        }
        })
    .then((response)=>{
        const Timeline = response.data;
        return Timeline;
    })
    .catch((error)=>{
        console.log(error)
    });
    setWorld(rec);
  }

  if(world.length === 0)
    World();

    function setLabel(record, index){
        return (
            <Tab label={record.country} {...a11yProps(index)} />
        );
    }

    function setPanel(record, index) {
      const nfObject = new Intl.NumberFormat('en-US');
        return(
            <TabPanel value={value} index={index}>
            <div className = "countryDetail">
            <img  alt="Flag" className="flag" src={record.countryInfo.flag}></img>
                <h1> {record.country }</h1><br/>
                <p>Total Cases: {nfObject.format(parseInt(record.cases))}</p>
                <p>New Cases Today: {nfObject.format(parseInt(record.todayCases))}</p>
                <p><p style={{color:"red"}}>Deaths: {nfObject.format(parseInt(record.deaths))}</p></p>
                <p>New Deaths Today: {nfObject.format(parseInt(record.todayDeaths))}</p>
                <p><p style={{color:"green"}}>Recoveries: {nfObject.format(parseInt(record.recovered))}</p></p>
                <p>Active Cases: {nfObject.format(parseInt(record.active))}</p>
                <p>Critical Cases: {nfObject.format(parseInt(record.critical))}</p>
            </div>
            <div className="graph"><Graph name={record.country} ></Graph></div>
            </TabPanel>
        )
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>
      {width<600?(<div className="swipe">
        <img src="./Images/swipe.png" alt="Swipe"></img>
      </div>):null} 
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Corona Live"
          className={classes.tabs}
        >
          {world.map(setLabel)}
        </Tabs>
        {world.map(setPanel)}
      </div>
    </>
  );
}



export default (VerticalTabs);
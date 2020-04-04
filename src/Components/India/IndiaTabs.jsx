import React, {useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {IndiaContext} from "../Store";
import axios from "axios";


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
    height: 350,
    position:"relative",
    top:450,
    //left:360,
    width:470,
    borderRadius: 10,
    maxWidth: 1960,
    margin: "auto",
    zIndex: -1,
    marginBottom: 100
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [ind, setInd] = useContext(IndiaContext);
  

  const India = async () => {
    const rec = await axios({
        "method":"GET",
        "url":"https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",
        })
    .then((response)=>{
        const Timeline = response.data.data.statewise;
        return Timeline;
    })
    .catch((error)=>{
        console.log(error)
  });
  setInd(rec);
  } 

  if(ind===null)
    India();
  
  
    function setLabel(record, index){
        return (
            <Tab label={record.state} {...a11yProps(index)} />
        );
    }

    function setPanel(record, index) {
        return(
            <TabPanel value={value} index={index}>
            <div className = "countryDetail">
                <h1> {record.state}</h1><br/>
                <p>Total Cases: {record.confirmed}</p>
                <p><p className="red">Deaths: {record.deaths}</p></p>
                <p><p className="green">Recoveries: {record.recovered}</p></p>
                <p>Active Cases: {record.active}</p>
            </div>
            </TabPanel>
        )
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Corona Live"
        className={classes.tabs}
      >
        {ind.map(setLabel)}
      </Tabs>
      {ind.map(setPanel)}
    </div>
  );
}



export default (VerticalTabs);
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";
import Graph from "./Graph";

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
    flexGrow: 3,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
    position:"absolute",
    top:550,
    left:100,
    width:1300,
    borderRadius: 10,
    maxWidth: 1960,
    margin: "auto",
    zIndex: -1,
    marginBottom: 200
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [records, setRecords] = useState([]);

    const SetR = async () => {
        const rec = await axios({
            "method":"GET",
            "url":"https://corona.lmao.ninja/countries",
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
    setRecords(rec);
   }

    SetR();
    
    setInterval(SetR, 1000000);
    

    function setLabel(record, index){
        return (
            <Tab label={record.country} {...a11yProps(index)} />
        );
    }

    function setPanel(record, index) {
        return(
            <TabPanel value={value} index={index}>
            <div className = "countryDetail">
            <img  alt="Flag" className="flag" src={record.countryInfo.flag}></img>
                <h1> {record.country }</h1><br/>
                <p>Total Cases: {record.cases}</p>
                <p>New Cases Today: {record.todayCases}</p>
                <p><p className="red">Deaths: {record.deaths}</p></p>
                <p>New Deaths Today: {record.todayDeaths}</p>
                <p><p className="green">Recoveries: {record.recovered}</p></p>
                <p>Active Cases: {record.active}</p>
                <p>Critical Cases: {record.critical}</p>
            </div>
            <div className="graph"><Graph name={record.country} ></Graph></div>
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
        {records.map(setLabel)}
      </Tabs>
      {records.map(setPanel)}
    </div>
  );
}

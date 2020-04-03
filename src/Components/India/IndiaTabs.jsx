import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const rp = require("request-promise");
const $ = require("cheerio");

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
    marginBottom: 400
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [records, setRecords] = useState([]);
  
  const setR = async () => {
    const siteUrl = "https://www.mohfw.gov.in/";
    const Record = await rp(siteUrl)
    .then(html => { 
      var i=0;
      var k="1234";
      const Record = [];
      
      var rec = {
        state: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(2)",html)[0].children[0].data,
        totalCases:  $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(3)",html)[0].children[0].data,
        recovered: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(4)",html)[0].children[0].data,
        deaths: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(5)",html)[0].children[0].data
      }
            
        while(k.length!==0)
        {
          i++;
          Record.push(rec);
            rec = {
                state: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(2)",html)[0].children[0].data,
                totalCases:  $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(3)",html)[0].children[0].data,
                recovered: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(4)",html)[0].children[0].data,
                deaths: $(".table > tbody:nth-child(2) > tr:nth-child("+(i+1)+") > td:nth-child(5)",html)[0].children[0].data
            }
            k = $(".table > tbody:nth-child(2) > tr:nth-child("+(i+2)+") > td:nth-child(5)",html);
        }  
        return Record;
           
    })
    .catch(error => {
        console.log(error)
    });
    setRecords(Record); 
  
  }
  setR();


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
                <p>Total Cases: {record.totalCases}</p>
                <p><p className="red">Deaths: {record.deaths}</p></p>
                <p><p className="green">Recoveries: {record.recovered}</p></p>
                <p>Active Cases: {Number(record.totalCases)-Number(record.deaths)-Number(record.recovered)}</p>
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
        {records.map(setLabel)}
      </Tabs>
      {records.map(setPanel)}
    </div>
  );
}

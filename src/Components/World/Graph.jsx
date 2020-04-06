import React, { useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {HistoryContext} from '../Store';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import request from "request";
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Margin,
  Title,
  Tooltip,
  Label,
  Grid
} from "devextreme-react/chart";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function Graph(props) {
  const classes = useStyles();
  const [history, setHistory] = useContext(HistoryContext);
  const [chart, setChart] = useState(0);

  const Hist = async () => {

    var options = {
      'method': 'GET',
      'url': 'https://pomber.github.io/covid19/timeseries.json',
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      setHistory(JSON.parse(response.body));
    });
  }

  if(history.length===0)
    Hist();    

   var name = "";

  if(props.name==="USA")
    name = "US";
  else if(props.name==="UK")
    name = "United Kingdom";
  else if(props.name==="S. Korea")
    name = "Korea, South";
  else if(props.name==="UAE")
    name = "United Arab Emirates";
  else if(props.name==="Moldova, Republic of")
    name = "Moldova";
  else if(props.name==="Tanzania, United Republic of")
    name = "Tanzania";
  else if(props.name==="Syrian Arab Republic")
    name = "Syria";
  else if(props.name==="Libyan Arab Jamahiriya")
    name = "Libya";
  else if(props.name==="Lao People\"s Democratic Republic")
    name = "Laos";
  else if(props.name==="Holy See (Vatican City State)")
    name = "Holy See";
  else
    name = props.name;

  var info = history[name]
    
    

  function getData() {
    return (
      <Chart
          palette={chart===0?"Material":chart===1?"Dark Voilet":chart===2?"Carmine":chart===3?"Bright":null}
          dataSource={info}
        >
          <CommonSeriesSettings
            argumentField="date"
            type="line"
          />
          {chart===0||chart===1?<Series key="confirmed" valueField="confirmed" name="Total Cases" />:null}
          {chart===0||chart===2?<Series key="deaths" valueField="deaths" name="Total Deaths" />:null}
          {chart===0||chart===3?<Series key="recovered" valueField="recovered" name="Total Recoveries" />:null}
          <Margin bottom={20} right={10} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
          <Label
              wordWrap="none"
              overlappingBehavior={"rotate"}
              rotationAngle={60}
            />
          <Grid visible={true} />
          </ArgumentAxis>
          <Legend
              verticalAlignment="bottom"
              horizontalAlignment="center"
              itemTextPosition="bottom"
            />
            <Title text={"Corona Record in " + name}>
              
            </Title>
            <Tooltip enabled={true} />
          </Chart>
    )
    
  }
  
  const chartTypes = ["All", "Total Cases", "Deaths", "Recovered"];

  function handleChange(event) {
    setChart(event.target.value);
  }

  return (
    <Paper>

      {getData()}
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="SelectChart"
          id="demo-simple-select"
          value={chart}
          onChange={handleChange}
        >
          <MenuItem value={0}>{chartTypes[0]}</MenuItem>
          <MenuItem value={1}>{chartTypes[1]}</MenuItem>
          <MenuItem value={2}>{chartTypes[2]}</MenuItem>
          <MenuItem value={3}>{chartTypes[3]}</MenuItem>
        </Select>
      </FormControl>
      
    </Paper>
  );
}




export default (Graph);
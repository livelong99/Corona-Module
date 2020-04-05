import React, { useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {HistoryContext} from '../Store';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
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
    const rec = await axios({
    "method": "get",
    "url": "https://corona.lmao.ninja/v2/historical"})
    .then((response)=>{
        const Timeline = response.data;
        return Timeline;
    })
    .catch((error)=>{
        console.log(error)
  });
  setHistory(rec)
  }

  if(history.length===0)
    Hist();

  const info = history.filter((rec)=>(rec.country===props.name))

  

  function getData(record) {

    const Cases = record.timeline.cases;
    const Deaths = record.timeline.deaths;
    const Recovered = record.timeline.recovered;
    const data = []
    const dates = Object.keys(Cases);
    var date;
    for(date of dates) {
       if(Cases[date]>0){
          if(date.length===7)
            data.push({argument:date.substring(0,4) , cases: Cases[date], deaths: Deaths[date], recovered: Recovered[date] });
          else
            data.push({argument:date.substring(0,3) , cases: Cases[date], deaths: Deaths[date], recovered: Recovered[date] });       
          }
    }

    return (
      <Chart
          palette={chart===0?"Material":chart===1?"Dark Voilet":chart===2?"Carmine":chart===3?"Bright":null}
          dataSource={data}
        >
          <CommonSeriesSettings
            argumentField="argument"
            type="line"
          />
          {chart===0||chart===1?<Series key="cases" valueField="cases" name="Total Cases" />:null}
          {chart===0||chart===2?<Series key="deaths" valueField="deaths" name="Total Deaths" />:null}
          {chart===0||chart===3?<Series key="recovered" valueField="recovered" name="Total Recoveries" />:null}
          <Margin bottom={20} right={10} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
          <Label
              wordWrap="none"
              overlappingBehavior={"hidden"}
            />
          <Grid visible={true} />
          </ArgumentAxis>
          <Legend
              verticalAlignment="bottom"
              horizontalAlignment="center"
              itemTextPosition="bottom"
            />
            <Title text={"Corona Record in " + props.name}>
              
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

      {info.map(getData)}
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


{/* <Chart data={data} width={800} height={400}>
        <ArgumentAxis>
        <Label
              wordWrap="none"
              overlappingBehavior={"stagger"}
            />
        </ArgumentAxis>
        <ValueAxis />
        <Title text={"Corona Record in " + props.name} />

        <LineSeries
            name="Total Cases"
            valueField="cases"
            argumentField="argument"
          />
          <LineSeries
            name="Total Deaths"
            valueField="deaths"
            argumentField="argument"
          />
          <LineSeries
            name="Total Recoveries"
            valueField="recovered"
            argumentField="argument"
          />
          <Legend />
          <ZoomAndPan />
      </Chart> */}
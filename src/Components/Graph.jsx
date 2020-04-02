import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  ZoomAndPan,
  Title
} from "@devexpress/dx-react-chart-material-ui";


function Graph(props) {

  const [history, setHist] = useState([]);

  const SetH = async () => {
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
  setHist(rec);
  }
  SetH();

  const info = history.filter((rec)=>(rec.country===props.name))

  function getData(record) {
    const Cases = record.timeline.cases;
    const Deaths = record.timeline.deaths;
    const Recovered = record.timeline.recovered;
    const data = []
    const dates = Object.keys(Cases);
    var i =0;
    var k = Math.round(dates.length/10);
    var date;
    for(date of dates) {
       if(Cases[date]>0){
        if(i%(k-1)===0){
          if(date.length===7)
            data.push({argument:date.substring(0,4) , cases: Cases[date], deaths: Deaths[date], recovered: Recovered[date] });
          else
            data.push({argument:date.substring(0,3) , cases: Cases[date], deaths: Deaths[date], recovered: Recovered[date] });
        }
        //else
          //data.push({argument:"" , cases: Cases[date], deaths: Deaths[date], recovered: Recovered[date] });
       }
       i++;
    }
    date = dates[dates.length-1];
    data.push({argument:date.substring(0,4) , cases: Cases[date], deaths: Deaths[date], recovered: Recovered[date] });
    return (
      <Chart data={data} width={800} height={400}>
        <ArgumentAxis/>
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
      </Chart>
    )
    
  }

  return (
    <Paper>

      {info.map(getData)}
      
    </Paper>
  );
}

export default Graph;
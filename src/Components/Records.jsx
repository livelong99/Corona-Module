import React, { useState } from 'react';
import { makeStyles,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 800,
    alignContent: "center"
  }
});

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});


export default function SimpleTable() {
    const classes = useStyles();
    const [records, setRecords] = useState([]);

    function SetR() {
        axios({
            "method":"GET",
            "url":"https://corona.lmao.ninja/countries",
            "params":{
            "sort":"deaths"
            }
            })
        .then((response)=>{
            const Timeline = response.data;
            setRecords(Timeline);
        })
        .catch((error)=>{
            console.log(error)
    });
   }
   SetR();
    setInterval(SetR, 10000);

    function Display(record) {
        console.log(record);
        return(
            <TableRow key={record.country}>
              <TableCell component="th" scope="row">
                {record.country}
              </TableCell>
              <TableCell align="right">{record.cases}</TableCell>
              <TableCell align="right">{record.deaths}</TableCell>
              <TableCell align="right">{record.recovered}</TableCell>
            </TableRow>
          );
    }


  return (
    <div className="container">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Cases&nbsp;</TableCell>
            <TableCell align="right">Deaths&nbsp;</TableCell>
            <TableCell align="right">Recoveries&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map(Display)}
        </TableBody>
      </Table>
    </div>
  );
}



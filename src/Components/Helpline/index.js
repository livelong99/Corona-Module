import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {State, Union} from './helpline';
import { Center } from 'devextreme-react/map';


const useStyles = makeStyles({
  table: {
    width: "80%",
    borderRadius:10,
    top:150,
    maxWidth: 450,
    position:"relative",
    margin:"auto",
    backgroundColor:"white",
    maxHeight:270,
    overflowY:"scroll",
    marginBottom:100
  },
  head:{
      position:"relative",
      top:50,
      margin:"auto",
      backgroundColor:"white",
      width:"100%",
      maxWidth:650,
      fontSize:27,
      fontFamily:"McLaren",
      borderRadius:10,
      textAlign:"center",
  }
});

function TableHelp(props) {
    const classes = useStyles();

    return(
        <div className="Table">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ><b>Name of the State</b></TableCell>
            <TableCell align="right" ><b>Helpline Numbers</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.help.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.state}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    )
}

export default function SimpleTable() {
    const classes = useStyles();

  return (
    <div className="help">
        <div className={classes.head}>
        <p><b>Central Helpline Number for corona-virus:-  <br/><p style={{color:"red"}}>+91-11-23978046</p></b></p>
        </div>
        <h1>States</h1>
        <TableHelp help={State} />
        <h1>Union Territories</h1>
        <TableHelp help={Union} />
    </div>
  );
}
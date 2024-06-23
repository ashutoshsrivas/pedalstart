"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TaskDelete from '../utility/TaskDelete';
import TaskEdit from '../utility/TaskEdit';
import AddColab from '../utility/AddColab';
import { Logout } from '@mui/icons-material';
import axios from 'axios';
import { api } from '@/Global';
import MyComments from '../utility/MyComments';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function randomDate() {
  return new Date().toISOString().slice(0, 10);
}



export default function SharedTaskListContainer({rows,refresh,user}) {

    const handleLeavecolab = (id) => () => {
        console.log({taskid: id,
            colab: user.email})
        axios.post(`${api}colab/remove/`, {
            taskid: id,
            colab: user.email
        }).then((res) => {
            console.log(res);
            refresh();
        });
    }
  console.log("sharedtasklist:",rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell >title</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell >Due Date</StyledTableCell>
            <StyledTableCell >Creator</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell >{row.title}</StyledTableCell>
              <StyledTableCell >{row.description}</StyledTableCell>
              <StyledTableCell >{row.duedate}</StyledTableCell>
              <StyledTableCell >{row.creator}</StyledTableCell>
              <StyledTableCell align='right'><Logout onClick={handleLeavecolab(row.id)}></Logout><MyComments user={user} task={row}></MyComments>   </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
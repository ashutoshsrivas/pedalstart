import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Edit } from '@mui/icons-material';
import { TextField } from '@mui/material';
import axios from 'axios';
import { api } from '@/Global';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TaskEdit({task,refresh}) {
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState(task.title);
    const [description, setDescription] = React.useState(task.description);
    const [dueDate, setDueDate] = React.useState(task.dueDate);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    axios.post(`${api}task/update/`, {
      id: task.id,
      title: title,
      desc: description,
      dueDate: dueDate
    }).then((res) => {
      console.log(res);
      setOpen(false);
      refresh();
    });
  };

  return (
    <React.Fragment>
      
      <Edit onClick={handleClickOpen} className="mx-2"/>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Task
            </Typography>
            
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className='p-4 container'>
            <TextField className='my-2 p-2' label="ID" variant="outlined" value={task.id} disabled fullWidth/>
            <TextField className='my-2 p-2' label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth/>
            <TextField className='my-2 p-2' label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth/>
            <input type='date' className='form-control my-2 p-2' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
            <Button variant="outlined" onClick={handleSave}>Save</Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
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
import { Delete, Edit, PersonAdd } from '@mui/icons-material';
import { Alert, ListItem, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import { api } from '@/Global';
import Loader from '../components/Loader';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddColab({ task, refresh }) {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const [collaborator, setCollaborator] = React.useState('');
    const [snackMsg, setSnackMsg] = React.useState('');
    const [colabs, setColabs] = React.useState([]);

    const getCollaborators = async () => {
        try {

            axios.get(`${api}colab/getCollaborators/${task.id}`).then((res) => {
                console.log(res.data);
                setColabs(res.data);
                setIsLoading(false);
            });
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getCollaborators();
    }, []);

    const handleColabDelete = (colab) => () => {
        axios.post(`${api}colab/remove/`, {
            taskid: task.id,
            colab: colab
        }).then((res) => {
            console.log(res);
            setSnackMsg(res.data);
            setSnackOpen(true);
            getCollaborators();
        });
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        axios.post(`${api}colab/add/`, {
            taskid: task.id,
            colab: collaborator
        }).then((res) => {
            console.log(res);
            if (res.data === "Added as collaborator") {
                setColabs([...colabs, { colab: collaborator }]);
            }
            setCollaborator('');

            setSnackMsg(res.data);
            setSnackOpen(true);
        });
    };

    const [snackOpen, setSnackOpen] = React.useState(false);

    const handleSnackClick = () => {
        setSnackOpen(true);
    };

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };
    if (isLoading) {
        return (
            <React.Fragment>

                {/* <Edit onClick={handleClickOpen} className="mx-2"/> */}
                <PersonAdd onClick={handleClickOpen} className="mx-2" />
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
                                Add Collaborator
                            </Typography>

                            <Button autoFocus color="inherit" onClick={handleSave}>
                                ADD
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div className='p-4 container'>
                        <TextField className='my-2 p-2' label="Add Collaborator" variant="outlined" value={collaborator} onChange={(e) => setCollaborator(e.target.value)} fullWidth />
                        <Button variant="outlined" onClick={handleSave}>Save</Button>
                        <br></br>
                        <br></br>
                        <Loader></Loader>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Snackbar
                    open={snackOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackClose}
                >
                    <Alert
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                        onClose={handleSnackClose}
                    >
                        {snackMsg}
                    </Alert>
                </Snackbar>
                {/* <Edit onClick={handleClickOpen} className="mx-2"/> */}
                <PersonAdd onClick={handleClickOpen} className="mx-2" />
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
                                Add Collaborator
                            </Typography>

                            <Button autoFocus color="inherit" onClick={handleSave}>
                                ADD
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div className='p-4 container'>
                        <TextField className='my-2 p-2' label="Add Collaborator" variant="outlined" value={collaborator} onChange={(e) => setCollaborator(e.target.value)} fullWidth />
                        <Button variant="outlined" onClick={handleSave}>Save</Button>
                        <br></br>
                        <br></br>

                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {colabs.map((value) => (
                                <ListItem
                                    key={value}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton aria-label="comment">
                                            <Delete onClick={handleColabDelete(value.colab)} />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={`${value.colab}`} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}
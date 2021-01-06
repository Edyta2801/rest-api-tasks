import React, { useState, useEffect } from 'react';
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '258px',
        backgroundColor: theme.palette.background.paper,
        marginLeft: '10px',

    },
    link: {
        all: 'unset',

    },
    button: {
        '&:hover': {
            backgroundColor: '#e7e7ec',
        }
    },
}));



function UsersList() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then((data) => {

                setUsers(data.results);
                setLoading(false);
                console.log(data.results);
            })
            .catch((error) => setError(true));
    }, []);

    console.log(users);


    return (
        <div className='Users'>
            <List className={classes.root}>
                {isLoading && <p>Loading...</p>}
                {hasError && <p>An error has occurred</p>}
                {users.map(user => (
                    <ListItem alignItems="flex-start" key={user.login.uuid} button className={classes.button}>
                        <ListItemAvatar>
                            <Avatar alt="" src={user.picture.thumbnail} />
                        </ListItemAvatar>
                        <Link to={`/users/${user.login.uuid}`} className={classes.link} >
                            <ListItemText
                                primary={`${user.name.first} ${user.name.last}`}
                                secondary={user.location.country} /></Link>
                    </ListItem>
                ))}
            </List>
            <Divider variant="inset" />
        </div >
    );
}

export default UsersList;
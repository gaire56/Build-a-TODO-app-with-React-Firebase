import React from 'react';
import '/.Todo.css';
import {  List, ListItem, ListItemAvatar, ListItemText,  } from '@material-ui/core';


function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>                    
                </ListItemAvatar>
                <ListItemText primary="Todo..." secondary={props.text} />
            </ListItem>                   
        </List>
    )
}

export default Todo

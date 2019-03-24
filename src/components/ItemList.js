import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { List, IconButton, Checkbox, ListItemText, ListItemSecondaryAction, ListItem } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    complited: {
        textDecoration: 'line-through'
    },
});

const CheckboxList = (props) => {

    return (
        <div className={props.classes.root}>
            <List>
                {props.items.map((item, index) => (
                    <ListItem
                        key={index}
                        role={undefined}
                        dense
                        button
                        onClick={props.onToggle}
                    >
                        <Checkbox
                            checked={item.checked}
                            tabIndex={index}
                            disableRipple
                        />
                        <ListItemText className={item.checked ? props.classes.complited : null} primary={item.text} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

CheckboxList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
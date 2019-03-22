import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon } from "@material-ui/core";

const styles = theme => ({
    wrapper: {
        marginTop: 20,
        height: 60
    },
    textField: {
        height: '100%',
        width: '80%'
    },
    button: {
        height: '100%',
        width: '20%',
        borderRadius: 0
    },
    input: {
        height: '100%'
    },
    icon: {
        marginLeft: '10px'
    }
});

const CreateItemField = (props) => {
    const { classes } = props;
    return (
    <div className={classes.wrapper}>
        <TextField
            id="filled-name"
            label="New Item"
            className={classes.textField}
            value={props.inputValue}
            onKeyPress = {e => { e.key === 'Enter' && props.onEnterPressed() }}
            onChange={props.inputChanged}
            variant="filled"
            InputProps={{
                className: classes.input
            }}
        />
        <Button onClick={props.createItem}
            className={classes.button}
            variant="contained" color="primary">
            Add Item
            <Icon className={classes.icon}>send</Icon>
        </Button>
    </div>
)
        
      

}

export default withStyles(styles)(CreateItemField);

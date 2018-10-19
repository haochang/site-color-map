import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    paper: {
        width: '90vw',
        margin: '0 auto',
        height: '50vh',
        padding: 40,
    },
    button: {
        margin: 9,
        width: '100%',
    }
};

class FileInput extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <TextField
                        id='outlined-full-width'
                        label='Label'
                        style={{ margin: 8 }}
                        placeholder='Placeholder'
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button variant='outlined' color='primary' className={classes.button}>
                        Submit
                    </Button>
                </Paper>
            </div>
        );
    }
}

FileInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileInput);

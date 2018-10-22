import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    paper: {
        width: '90vw',
        margin: '0 auto',
        height: '50vh',
        padding: 40,
    },
};

class ColorsOutput extends Component {
    state = {
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                Hello world!
            </Paper>
        );
    }
}

ColorsOutput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorsOutput);

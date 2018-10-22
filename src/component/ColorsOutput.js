import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    paper: {
        width: '90vw',
        margin: '20px auto',
        height: 'auto',
        padding: 40,
    },
    bar: {
        height: 15,
        position: 'relative',
        overflow: 'hidden',
    },
    innerBar: {
        transition: 'transform .4s linear',
        willChange: 'transform',
        top: 0,
        left: 0,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        transformOrigin: 'left',
    },
};

class ColorsOutput extends Component {
    state = {}

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                {Object.keys(this.props.colors).map((color, index) =>
                    <div key={index}>
                        <div > {color}</div>
                        <div> {this.props.colors[color]}</div>
                        <div style={{backgroundColor: 'rgb(255, 140, 179)' }} className={classes.bar}>
                            <div className={classes.innerBar}
                                style={{transform: `scaleX(${this.props.colors[color]/10})`,
                                    backgroundColor: `${color}`}}>
                            </div>
                        </div>
                    </div>
                )}
            </Paper>
        );
    }
}

ColorsOutput.propTypes = {
    classes: PropTypes.object.isRequired,
    colors: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorsOutput);

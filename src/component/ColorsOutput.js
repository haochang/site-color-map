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
    color: {
        margin: '15px 0',
    },
    bar: {
        height: 20,
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

    hexToRgb = (hex) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const newHex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                {Object.keys(this.props.colors).map((color, index) =>
                    <div key={index} className={classes.color}>
                        <div > {color}  <b>{this.props.colors[color]}</b></div>
                        <div style={{backgroundColor: `rgba(${this.hexToRgb(color)}, 0.2)` }} className={classes.bar}>
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

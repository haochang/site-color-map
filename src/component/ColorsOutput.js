import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import hexToRgb from '../util/hexToRgb';
import { styles }  from '../styles/colorsOutput';

class ColorsOutput extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                {Object.keys(this.props.colors).map((color, index) =>
                    <div key={index} className={classes.color}>
                        <div > {color}  <b>{this.props.colors[color]}</b></div>
                        <div style={{backgroundColor: `rgba(${hexToRgb(color)}, 0.2)` }} className={classes.bar}>
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

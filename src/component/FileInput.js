import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import extractor from 'css-color-extractor';

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
    },
};

class FileInput extends Component {
    state = {
        url: '',
        fetching: false,
    }

    fetchData = async (url) => {
        const res = await window.fetch(url).then(function(response) {
            return response.text();
        });
        const colors = extractor.fromCss(res);
        this.setState({
            fetching: false,
        });
        console.log(colors);
    }

    handleChange = url => event => {
        this.setState({
            [url]: event.target.value,
        });
    };

    onSubmit = () => {
        this.setState({
            fetching: true,
        });
        const url = this.state.url;
        this.fetchData(url);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <TextField
                        id='outlined-full-width'
                        label='Url'
                        style={{ margin: 8 }}
                        placeholder='URL to a css file'
                        fullWidth
                        margin='normal'
                        variant='outlined'
                        value={this.state.url}
                        onChange={this.handleChange('url')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button
                        disabled={this.state.fetching}
                        variant='outlined'
                        color='primary'
                        className={classes.button}
                        onClick={this.onSubmit}>
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

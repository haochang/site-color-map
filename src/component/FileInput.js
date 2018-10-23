import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import extractor from 'css-color-extractor';
import ColorsOutput from './ColorsOutput';
import sortColors from 'color-sorter';
import isUrl from 'is-url';

const styles = {
    root: {
        minHeight: '100vh',
        display: 'block',
        alignItems: 'center',
        paddingTop: 40,
    },
    paper: {
        width: '90vw',
        margin: '0 auto',
        height: 200,
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
        colors: null,
    }

    fetchData = async (url) => {
        try {
            const res = await window.fetch(url).then(function(response) {
                return response.text();
            });

            const colors = extractor.fromCss(res, {
                allColors: true,
                withoutGrey: true,
                withoutMonochrome: true,
            });
            this.setState({
                fetching: false,
            });
            this.handleColors(colors);
        } catch {
            this.setState({
                fetching: false,
                colors: null,
            });
        }
    }

    handleColors = (colors) => {
        const newColors = {};
        const sortedColors = sortColors(colors);
        sortedColors.map(color => {
            if (newColors[color]) {
                newColors[color] = newColors[color] + 1;
            } else {
                newColors[color] = 1;
            }
        });

        delete newColors[0];
        delete newColors['transparent'];

        this.setState({
            colors: newColors,
        });
    }

    handleChange = url => event => {
        this.setState({
            [url]: event.target.value,
        });
    };

    onSubmit = () => {
        const url = this.state.url;
        if (!isUrl(url)) {
            return
        }

        this.setState({
            fetching: true,
        });
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

                { this.state.colors && <ColorsOutput colors={this.state.colors} />}
            </div>
        );
    }
}

FileInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileInput);

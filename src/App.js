import React, { Fragment, Component } from 'react';
import FileInput from './component/FileInput.js';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline />
                <FileInput />
            </Fragment>
        );
    }
}

export default App;

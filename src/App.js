import React, { Component } from 'react';
import MainPage from './MainPage';
import history from './history';

class App extends Component {
    componentDidMount() {
        // Force an update if the URL changes.
        history.listen(() => this.forceUpdate());
    }

    render() {
        return (
            <main role="main">
                <MainPage />
            </main>
        );
    }
}

export default App;

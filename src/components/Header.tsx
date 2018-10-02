import * as React from 'react';
import logo from '../logo.svg';

export default class Header extends React.Component {
    public render() {
        return (
            <header className="toss-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="toss-title">Try Your Luck</h1>
            </header>
        );
    }
}
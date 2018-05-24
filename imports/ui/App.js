import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import Addplayer from './Addplayer';
import PlayerList from './PlayerList';

export default class App extends React.Component
{
    render() {
        return (
            <div id="app">
                <TitleBar title={this.props.title} subtitle="Created by Nutthakorn"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <Addplayer score={0} />
                </div>
            </div>
        );
    }
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};
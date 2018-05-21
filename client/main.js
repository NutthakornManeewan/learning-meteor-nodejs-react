import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';
import TitleBar from '../imports/ui/TitleBar';
import Addplayer from '../imports/ui/Addplayer';
import PlayerList from '../imports/ui/PlayerList';

Meteor.startup(function() 
{
  // Call tracker.autorun - to sync with real MongoDB.
  Tracker.autorun(function() 
  {
    let players = Players.find().fetch();
    let title = 'SCORE KEEP';
    let jsx = (
      
      <div>
        <TitleBar title={title} subtitle="created by Nutthakorn Maneewan"/>
        <PlayerList players={players}/>
        <Addplayer score={0} />
      </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
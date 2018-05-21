import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';
import App from '../imports/ui/App';

Meteor.startup(function() 
{
  // Call tracker.autorun - to sync with real MongoDB.
  Tracker.autorun(function() {
  
    let players = Players.find({},{sort:{score:-1}}).fetch();
    let title = 'SCORE KEEP';
    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
    // Sort database = db.players.find().sort({score:-1});
  });
});
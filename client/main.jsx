import '/imports/startup/client/index.jsx';

// Import Tether.js - Bootstrap tooltip requires Tether.
// We also add 'global.Tether' as a workaround for Meteor.
import tether from 'tether';
global.Tether = tether;

// Import Bootstrap JS.
bootstrap = require('bootstrap');

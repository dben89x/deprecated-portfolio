import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('resume');
  this.route('projects');
  // this.route('solarsystem');
});

export default Router;

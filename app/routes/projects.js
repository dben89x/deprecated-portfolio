import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.push('project', {
      id: 1,
      title: 'gCamp',
      description: 'A Rails project management app similar to BaseCamp',
      thumbnail: 'assets/images/gcamp.png',
      url: 'http://gcamp-app.herokuapp.com/',
      status: 'assets/images/complete.png',
      features: [
        'CRUD projects and CRUD tasks within projects',
        'Comment on tasks',
        'Manage memberships for projects, with different levels of administrator',
        'Filters visible information based on administrator',
        'Link to Pivotal Tracker API'
      ],
      administrator: true
    });

    this.store.push('project', {
      id: 2,
      title: 'Spot',
      description: 'A social Rails app for creating events and inviting friends to those events',
      thumbnail: 'assets/images/spot.png',
      url: 'http://spot-.herokuapp.com/',
      status: 'assets/images/in-development.png',
      features: [
        'Create events at existing or new places',
        "See place's location on Google Maps",
        "Categorize places based on mood",
        "See a list of events that friends are involved in",
        "Give updates on different aspects of a place's current experience"
      ],
      administrator: true
    });

    this.store.push('project', {
      id: 3,
      title: 'Rantly',
      description: 'AngularJS app with a Rails API where one can "rant" about whatever he or she wishes',
      thumbnail: 'assets/images/rantly.png',
      url: 'http://rantly-app.herokuapp.com/',
      status: 'assets/images/in-development.png',
      features: [],
      administrator: true
    });

    this.store.push('project', {
      id: 4,
      title: 'Markdown Editor',
      description: 'A simple EmberJS app that converts user markdown input into markup output',
      thumbnail: 'assets/images/markstuff.png',
      url: 'http://markdown-editor-app.herokuapp.com/',
      status: 'assets/images/complete.png',
      features: [],
      administrator: false
    });

    this.store.push('project', {
      id: 5,
      title: 'Notes',
      description: 'A simple EmberJS app that allows users to create and delete notes',
      thumbnail: 'assets/images/notes.png',
      url: 'http://notes1.herokuapp.com/',
      status: 'assets/images/complete.png',
      features: [],
      administrator: false
    });

    return this.store.all('project');
  }
});

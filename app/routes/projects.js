import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.push('tech', {
      id: 1,
      title: "Ruby on Rails",
      color: "color:#A22135"
    });

    this.store.push('tech', {
      id: 2,
      title: "EmberJS",
      color: "color:#FF7A4D"
    });

    this.store.push('tech', {
      id: 3,
      title: "AngularJS",
      color: "color:#FD0021"
    });

    this.store.push('tech', {
      id: 4,
      title: "JavaScript",
      color: "color:#F0DB4F"
    });


    this.store.push('project', {
      id: 1,
      title: 'PokerSprout',
      description: "An educational/training site focused on professional Poker concepts. Additional site features can be shown upon request.",
      technologies: [
        this.store.find("tech", 1),
        this.store.find("tech", 4),
      ],
      thumbnail: 'assets/images/pokersprout.png',
      url: 'https://www.pokersprout.com/',
      statusText: "Project Under Development",
      status: 'assets/images/in-development.png',
    });

    this.store.push('project', {
      id: 2,
      title: 'gCamp',
      description: 'A project management app similar to BaseCamp',
      technologies: [
        this.store.find("tech", 1),
      ],
      thumbnail: 'assets/images/gcamp.png',
      url: 'http://gcamp-app.herokuapp.com/',
      statusText: "Project Complete",
      status: 'assets/images/complete.png',
      features: [
        'CRUD projects and CRUD tasks within projects',
        'Comment on tasks',
        'Manage memberships for projects, with different access levels',
        'Filters visible information based on administrator',
        'Link to Pivotal Tracker API'
      ],
      administrator: true
    });

    this.store.push('project', {
      id: 3,
      title: 'Spot',
      description: 'A social site for creating events and inviting friends to those events',
      technologies: [
        this.store.find("tech", 1),
      ],
      thumbnail: 'assets/images/spot.png',
      url: 'http://spot-.herokuapp.com/',
      statusText: "Project Under Development",
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
      id: 4,
      title: 'Rantly',
      statusText: "Project Under Development",
      description: 'AngularJS app with a Rails API where one can "rant" about whatever he or she wishes',
      technologies: [
        this.store.find("tech", 3),
        this.store.find("tech", 1),
      ],
      thumbnail: 'assets/images/rantly.png',
      url: 'http://rantly-app.herokuapp.com/',
      status: 'assets/images/in-development.png',
      features: [
        'do stuff'
      ],
      administrator: true
    });

    this.store.push('project', {
      id: 5,
      title: 'Markdown Editor',
      description: 'A simple EmberJS app that converts user markdown input into markup output',
      technologies: [
        this.store.find("tech", 2),
      ],
      thumbnail: 'assets/images/markstuff.png',
      url: 'http://markdown-editor-app.herokuapp.com/',
      statusText: "Project Complete",
      status: 'assets/images/complete.png',
      features: [],
      administrator: false
    });

    this.store.push('project', {
      id: 6,
      title: 'Notes',
      description: 'A simple EmberJS app that allows users to create and delete notes',
      technologies: [
        this.store.find("tech", 2),
      ],
      thumbnail: 'assets/images/notes.png',
      url: 'http://notes1.herokuapp.com/',
      statusText: "Project Complete",
      status: 'assets/images/complete.png',
      features: [],
      administrator: false
    });


    return this.store.all('project');
    return this.store.all('tech');
  }
});

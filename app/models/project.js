import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  technologies: DS.attr('array'),
  thumbnail: DS.attr('string'),
  url: DS.attr('string'),
  status: DS.attr('string'),
  statusText: DS.attr('string'),
  features: DS.attr('array'),
  administrator: DS.attr('boolean')
});

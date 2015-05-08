import DS from "ember-data";

export default DS.Model.extend({
  description: DS.attr('string'),
  establishment: DS.attr('string'),
  started: DS.attr('string'),
  left: DS.attr('string'),
  type: DS.attr('string')
});

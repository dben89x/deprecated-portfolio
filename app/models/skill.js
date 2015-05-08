import DS from "ember-data";

export default DS.Model.extend({
  description: DS.attr('string'),
  type: DS.attr('string'),
  proficiency: DS.attr('integer'),
});

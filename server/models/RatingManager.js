/**
 * WePluginRatingModel
 *
 * @module      :: RatingManager
 * @description :: Manage where rating is allowed
 *
 */

module.exports = {
  schema: true,
  attributes: {
    modelName: {
      type: 'string',
      required: true
    },
    vocabulary: {
      model: 'vocabulary',
      required: true
    },
    active: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};

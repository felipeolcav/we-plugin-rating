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
    modelName: 'string',
    vocabulary: {
      model: 'vocabulary'
    },
    active: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};

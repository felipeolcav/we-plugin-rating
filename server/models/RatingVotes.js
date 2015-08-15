/**
 * WePluginRatingModel
 *
 * @module      :: Rating
 * @description :: Rating Records
 *
 */

module.exports = {
  schema: true,
  attributes: {
    model_id: {
      type: 'integer',
      required: true
    }
    manager: {
      model: 'ratingManager'
      required: true,
    },
    vocabulary: {,
      collection: 'term',
      via: 'terms_rated'
      required: true,
    },
    rate: {
      type: 'integer',
      required: true
    },
    creator: {
      model: 'User',
      required: true
    }
  }
};

/**
 * WePluginRatingModel
 *
 * @module      :: Rating
 * @description :: [Add info about you model here]
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
    },
    vocabulary: {,
      collection: 'term',
      via: 'terms_rated'
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

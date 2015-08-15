/**
 * WePluginRatingController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */

// we.js controller utils
var actionUtil = require('we-helpers').actionUtil;
var util = require('util');
var RatingManager = require('../models/RatingManager');

module.exports = {

  create: function (req, res) {
    var Model = actionUtil.parseModel(req);

    // Create data object (monolithic combination of all parameters)
    // Omit the blacklisted params (like JSONP callback param, etc.)
    var data = actionUtil.parseValues(req);

    RatingManager.findOne({
      model_name: data.model_name,
      active: true
    }).then(function (manager) {
      var myVote = Model.findOne({ manager: manager.id, model_id: data.id }).then(function (vote) {
        return vote;
      });

      return [manager, myVote];
    }).spread(function (manager, myVote) {
      if (myVote) {
        res.badRequest({
          'Você já votou.'
        });
      }
    });

    // Create new instance of model using data from params
    Model.create(data).exec(function created (err, newInstance) {

      // Differentiate between waterline-originated validation errors
      // and serious underlying issues. Respond with badRequest if a
      // validation error is encountered, w/ validation info.
      if (err) return res.negotiate(err);

      // If we have the pubsub hook, use the model class's publish method
      // to notify all subscribers about the created item
      if (req._sails.hooks.pubsub) {
        Model.publishCreate(newInstance, !req.options.mirror && req);
      }

      // request getter used in toJSON
      function getReq() { return req; };
      // set getReq function to return current req object
      newInstance.getReq = getReq;

      var response = {};
      response[req.options.model] = newInstance;

      // Send JSONP-friendly response if it's supported
      res.created(response);
    });
  }
};

App.RatingAdd = Ember.ObjectController.extend({
    actions:{
     enviar: function(){
        var rating = this.get('model.rating');
        var self = this;

        var novoVoto = this.store.createRecord('rating', rating);

        novoVoto.save().then(function(){
          self.transitionToRoute(novoVoto.model_name, novoVoto.id);
        }).fail(function (err) {
          // TODO: Implement visual message error
          Ember.log(err);
        });
      }
    }
});

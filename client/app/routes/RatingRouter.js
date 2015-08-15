App.Router.map(function() {
  this.resource('rating', {
    path: '/rating'
  }, function() {
    this.route('add', {
      path: '/add'
    });
  });
});

'use strict';

var api = require('./controllers/api'),
    spells = require('./controllers/spells'),
    characters = require('./controllers/characters'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // Spells Routes
  app.get('/spells', spells.all);
  app.get('/spells/:id', spells.show);
  app.put('/spells/:id', spells.update);
  
  // app.get('/spells/spec/:specialization', spells.getProductBySpecs);
  //app.get('/spells/name/:name', spells.getId);
  

  // Character Routes
  app.get('/character', characters.all);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
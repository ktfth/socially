const users = require('./users/users.service.js');
const v1Posts = require('./v1/posts/posts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(v1Posts);
};

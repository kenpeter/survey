const appRouter = function (app) {
  app.get("/", function(req, res) {
    const data = require('../data');
    res.status(200).json(data);
  });
}

module.exports = appRouter;

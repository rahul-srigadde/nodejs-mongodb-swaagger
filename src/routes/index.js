const textRouter = require("./resources/textCollection");

function useRoutes(app) {
  app.use("/api", textRouter);
}

module.exports = useRoutes;

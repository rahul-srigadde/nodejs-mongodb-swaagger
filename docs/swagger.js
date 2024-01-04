const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  // Documentation in JSON format
  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerFile);
  });
}
module.exports = swaggerDocs;

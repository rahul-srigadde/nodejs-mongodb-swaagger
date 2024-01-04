const express = require("express");
const TextService = require("../../services/textService").TextService;
const requestUtils = require("../../utils/requestUtils");
const router = express.Router();

router.all("/text", (req, res, next) => {
  /* #swagger.tags = ["Text Collection"]
    #swagger.description = "Endpoint to get the specific user."
  */

  next();
});

router.all(["/text", "/text/:id"], (req, res, next) => {
  req.service = new TextService();
  next();
});

router.get("/text", requestUtils.listResources);

router.get("/text/:id", requestUtils.listResources);

router.post("/text", requestUtils.listResources);

router.put("/text/:id", requestUtils.listResources);

router.delete("/text/:id", requestUtils.listResources);

module.exports = router;

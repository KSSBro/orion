const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const { webFeedProcessor } = require("../modules/webFeedProcessor.js");

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use(bodyParser.json());

router.get("/webfeed", async (req, res) => {
  const value = req.query.value;
  
  webFeedProcessor(value).then((processedData) => {
    res.status(200).send(processedData.mainData);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = {
    router
}
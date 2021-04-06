const express = require("express");
const router = express.Router();

const Item = require("../models/Item");

router.get("/", (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
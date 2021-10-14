const express = require('express');
const router = new express.Router();
const seeds = require("./../config/seeds");

const homeController = (req, res) => {
    res.render("home.hbs", {seeds});
};

router.get("/", homeController);



module.exports = router;
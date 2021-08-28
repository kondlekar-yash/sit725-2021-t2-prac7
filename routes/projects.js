var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req,res) => {
    Controllers.projectsController.getProjects(res);
    /* var title = "InFuture, Work in progress"
    res.json({statusCode: 200, data: title, message:"NA"}) */
})

module.exports = router;
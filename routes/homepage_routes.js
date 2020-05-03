const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("<h1>This is the homepage of the RESTFUL API</h1><h3>These are the routes included:</h3><ul><li>/api/quiz/list</li><li>/api/quiz/:quiz_id</li><li>/api/quiz/:quiz_id/:question:id</li><li>/api/check_answer/:quiz_id/:question_id/:answer</li></ul>");
});

module.exports = router;
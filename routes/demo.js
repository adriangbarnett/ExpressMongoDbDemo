const express = require('express');
const router = express.Router();
module.exports = router;

//
router.get("/", (req, res) => {
    res.render("demo");
});

//
router.post("/", (req, res) => {
    res.send("login-post");
});

//
router.put("/", (req, res) => {
    res.send("login-put");
});

//
router.patch("/", (req, res) => {
    res.send("login-patch");
});

//
router.delete("/", (req, res) => {
    res.send("login-delete");
});
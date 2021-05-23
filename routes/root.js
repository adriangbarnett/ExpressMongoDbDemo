const express = require('express');
const router = express.Router();
module.exports = router;

//
router.get("/", (req, res) => {
    res.send("root-get");
});

//
router.post("/", (req, res) => {
    res.send("root-post");
});

//
router.put("/", (req, res) => {
    res.send("root-put");
});

//
router.patch("/", (req, res) => {
    res.send("root-patch");
});

//
router.delete("/", (req, res) => {
    res.send("root-delete");
});
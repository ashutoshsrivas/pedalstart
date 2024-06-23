const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const { mysqlcred } = require("../Globals");

router.post("/add", (req, res) => {
    try {
        const { taskid, body, author} = req.body;
        const pool = mysql.createPool(mysqlcred);
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        pool.query('INSERT INTO comments(taskid,body,author,times) VALUES(?,?,?,?)', [taskid, body, author, date], (err, results) => {
            if (err) {
                res.send(err);
            }
            res.send("Comment added");
        });
        
    }
    catch (e) {
        res.send(e);
    }
});

router.get("/getComments/:taskid", (req, res) => {
    try {
        const { taskid } = req.params;
        const pool = mysql.createPool(mysqlcred);
        pool.query('select * from comments where taskid = ? order by id desc', [taskid], (err, results) => {
            if (err) {
                res.send(err);
            }
            res.send(results);
        });
    }
    catch (e) {
        res.send(e);
    }
});


module.exports = router;
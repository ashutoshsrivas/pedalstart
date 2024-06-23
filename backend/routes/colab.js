const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const { mysqlcred } = require("../Globals");

router.post("/add", (req, res) => {
    try {
        const { taskid, colab } = req.body;
        const pool = mysql.createPool(mysqlcred);
        pool.query('select * from colab where taskid = ? and colab = ?', [taskid, colab], (err, results) => {
            if (err) {
                res.send(err);
            }
            if (results.length > 0) {
                res.send("Already a collaborator");
            }
            else {
                pool.query('INSERT INTO colab(taskid,colab) VALUES(?,?)', [taskid, colab], (err, results) => {
                    if (err) {
                        res.send(err);
                    }
                    res.send("Added as collaborator");
                });
            }
        }
        );
    }
    catch (e) {
        res.send(e);
    }
});

router.post("/remove", (req, res) => {
    try {
        const { taskid, colab } = req.body;
        const pool = mysql.createPool(mysqlcred);
        pool.query('select * from colab where taskid = ? and colab = ?', [taskid, colab], (err, results) => {
            if (err) {
                res.send(err);
            }
            if (results.length > 0) {
                pool.query('DELETE FROM colab WHERE taskid = ? and colab = ?', [taskid, colab], (err, results) => {
                    if (err) {
                        res.send(err);
                    }
                    res.send("Removed as collaborator");
                });
            }
            else {
                res.send("Not a collaborator");
            }
        }
        );
    }
    catch (e) {
        res.send(e);
    }
});

router.get("/getCollaborators/:taskid", (req, res) => {
    try {
        const taskid = req.params.taskid;
        const pool = mysql.createPool(mysqlcred);
        pool.query('select * from colab where taskid = ?', [taskid], (err, results) => {
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

router.get("/gettasks/:colab", (req, res) => {
    try {
        const colab = req.params.colab;
        const pool = mysql.createPool(mysqlcred);
        pool.query(`SELECT * from colab,tasklist WHERE colab.taskid = tasklist.id and colab = "${colab}"`, (err, results) => {
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
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const { mysqlcred } = require("../Globals");



router.post("/create", (req, res) => {
    try {
        const {
            title,
            desc,
            dueDate,
            creator,
        } = req.body;
        const pool = mysql.createPool(mysqlcred);
        pool.query(
            `INSERT INTO tasklist( title, description, duedate, creator) VALUES ("${title}", "${desc}", "${dueDate}", "${creator}")`,
            (err, results) => {
                if (err) {
                    res.send(err);
                }
                res.send(results);
            }
        );
    } catch (e) {
        res.send(e);
    }
});

router.get("/get/:creator", (req, res) => {
    try {
        const { creator } = req.params;
        const pool = mysql.createPool(mysqlcred);
        pool.query(
            `SELECT * FROM tasklist WHERE creator = "${creator}"`,
            (err, results) => {
                if (err) {
                    res.send(err);
                }
                res.send(results);
            }
        );
    } catch (e) {
        res.send(e);
    }
});

router.post("/update", (req, res) => {
    try {
        const {
            id,
            title,
            desc,
            dueDate,
        } = req.body;
        const pool = mysql.createPool(mysqlcred);
        pool.query(
            `UPDATE tasklist SET title = "${title}", description = "${desc}", duedate = "${dueDate}" WHERE id = "${id}"`,
            (err, results) => {
                if (err) {
                    res.send(err);
                }
                res.send(results);
            }
        );
    } catch (e) {
        res.send(e);
    }
});

router.post("/delete", (req, res) => {
    try {
        const { id } = req.body;
        const pool = mysql.createPool(mysqlcred);
        pool.query(
            `DELETE FROM tasklist WHERE id = "${id}"`,
            (err, results) => {
                if (err) {
                    res.send(err);
                }
                res.send(results);
            }
        );
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;
// require("dotenv").config();
// const express = require("express");
// const app = express();
const db = require("../Config/database");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

//Request to get teacher info from the database
const teacherInfo = (req, res) => {
	const TeacherID = req.params.TeacherID;
	db.query("select * from Teacher WHERE TeacherID = 1", [TeacherID], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
};

module.exports = { teacherInfo };

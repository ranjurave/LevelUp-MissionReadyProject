// require("dotenv").config();
// const express = require("express");
// const mysql = require("mysql2");
const db = require("../Config/database");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

const studentHelpInfo = (req, res) => {
	const RequestID = req.params.RequestID;
	db.query(
		"SELECT HR.RequestID, child.ProfilePic, child.Name, child.StudentID, HR.DateCreated, HR.Done FROM HelpRequest As HR INNER JOIN Student as child on HR.StudentID = child.StudentID;",
		[RequestID],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
};

const updateReqData = (req, res) => {
	const RequestID = req.params.RequestID;
	console.log(RequestID);
	const RequestFilter = RequestID.split(",");
	console.log(RequestFilter);
	db.query(
		"UPDATE missio20_team5.HelpRequest SET HelpRequest.Done = 1 WHERE HelpRequest.RequestID IN (?);",
		[RequestFilter],
		(err, result) => {
			if (err) {
				res.send(err);
				console.log(err);
			} else {
				res.send(result);
				console.log("WORKED!");
			}
		}
	);
};

module.exports = {
	studentHelpInfo,
	updateReqData,
};

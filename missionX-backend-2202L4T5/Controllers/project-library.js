const db = require("../Config/database");

const projectlibrary = (req, res) => {
	const sqlInsert =
		// 'SELECT ProgressHistory.DateSubmitted, ProgressHistory.Submission, Student.Name, Student.ProfilePic FROM ProgressHistory, Student ORDER BY ProgressHistory.DateSubmitted DESC';
		"SELECT * FROM Projects";
	db.query(sqlInsert, async (error, result) => {
		try {
			res.send(result);
		} catch {
			console.log(error);
		}
	});
};

module.exports = { projectlibrary };

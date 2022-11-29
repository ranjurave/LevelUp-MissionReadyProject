const bcrypt = require("bcrypt");
const dbconnection = require("../Config/database");

// STUDENT LOGIN
const studentLogin = async (req, res) => {
	const emailId = req.body.emailId;
	const password = req.body.password;

	if (!emailId) {
		return res.status(400).send("Missing email");
	}
	if (!password) {
		return res.status(400).send("Missing password");
	}

	try {
		//SQL DB Query
		const [row] = dbconnection.query(`SELECT Password from missio20_team5.Student WHERE Email = ?`, [emailId]);
		//Checks if the user email is in the DB
		if (row.length === 0) {
			return res.send({ message: "You do not exist! Signup instead!" });
		}
		const { Password: comparePassword } = row[0];
		//	Checks if input password matches the password on DB
		const isPasswordMatching = bcrypt.compareSync(password, comparePassword);
		const responseMessage = isPasswordMatching
			? { message: "Student Login success!" }
			: { message: "Login extremely fail" };
		res.send(responseMessage);
	} catch (error) {
		res.send(err);
	}
};

// TEACHER LOGIN

const teacherLogin = async (req, res) => {
	const emailId = req.body.emailId;
	const password = req.body.password;

	if (!emailId) {
		return res.status(400).send("Missing email");
	}
	if (!password) {
		return res.status(400).send("Missing password");
	}

	try {
		const [row] = dbconnection.query(
			`SELECT Email, Password from missio20_team5.Teacher WHERE Email = ? AND Password = ?`,
			[emailId, password]
		);

		if (row.length === 0) {
			return res.send({ message: "You do not exist! Signup instead!" });
		}
		const { password: comparePassword } = row[0];

		const isPasswordMatching = bcrypt.compareSync(password, comparePassword);
		const responseMessage = isPasswordMatching
			? { message: "Teacher Login success!" }
			: { message: "Login extremely fail" };
		res.send(responseMessage);
	} catch (err) {
		res.send(err);
	}
};

module.exports = {
	studentLogin,
	teacherLogin,
};

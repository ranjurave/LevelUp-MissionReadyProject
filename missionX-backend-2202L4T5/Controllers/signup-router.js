const bcrypt = require("bcrypt");
const db = require("../Config/database");

// Student Signup Section
const studentSignUp = async (req, res) => {
	const fullName = req.body.fullName;
	const emailId = req.body.emailId;
	const password = req.body.password;
	const confirmedPassword = req.body.confirmedPassword;

	if (!fullName) {
		return res.status(400).send("Missing full name");
	}
	if (!emailId) {
		return res.status(400).send("Missing email");
	}
	if (!password) {
		return res.status(400).send("Missing password");
	}
	if (!confirmedPassword) {
		return res.status(400).send("Please confirm password");
	}

	try {
		const hashedPassword = bcrypt.hashSync(password, 10);
		//SQL DB Query
		db.query(`INSERT INTO missio20_team5.Student(Name, Email, Password) VALUES (?,?,?)`, [
			fullName,
			emailId,
			hashedPassword,
		]);
		res.send({ message: `New student created` });
	} catch (error) {
		console.log(error);
		res.send({ message: `Error ${JSON.stringify(error)}` });
	}
};

// Teacher Signup Section
const teacherSignUp = async (req, res) => {
	const fullName = req.body.fullName;
	const emailId = req.body.emailId;
	const password = req.body.password;
	const confirmedPassword = req.body.confirmedPassword;

	if (!fullName) {
		return res.status(400).send("Missing full name");
	}
	if (!emailId) {
		return res.status(400).send("Missing email");
	}
	if (!password) {
		return res.status(400).send("Missing password");
	}
	if (!confirmedPassword) {
		return res.status(400).send("Please confirm password");
	}

	try {
		const hashedPassword = bcrypt.hashSync(password, 10);

		//SQL DB Query
		db.query(`INSERT INTO missio20_team5.Teacher(Name, Email, Password) VALUES (?,?,?)`, [
			fullName,
			emailId,
			hashedPassword,
		]);
		res.send({ message: `New teacher created` });
	} catch (error) {
		console.log(error);
		res.send({ message: `Error ${JSON.stringify(error)}` });
	}
};

module.exports = { studentSignUp, teacherSignUp };

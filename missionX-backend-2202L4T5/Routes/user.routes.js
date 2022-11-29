const express = require("express");
//Simons controller import
const { studentSignUp, teacherSignUp } = require("../Controllers/signup-router");
const { studentLogin, teacherLogin } = require("../Controllers/login-router");
//Sellyna controller import
const { studentHelpInfo, updateReqData } = require("../Controllers/studentHelp");
const { teacherInfo } = require("../Controllers/teacherPro");
//Joshs controller import
const { projectsubmissions, updateSubData} = require("../Controllers/project-submissions");
const { projectlibrary } = require("../Controllers/project-library");
//Ranju controller import
const { studentProgress } = require("../Controllers/student-progress");
const { studentprofiles } = require("../Controllers/students-profiles");

const router = express.Router();

//Home page routes
router.post("/student-signup", studentSignUp);
router.post("/teacher-signup", teacherSignUp);

router.post("/student-login", studentLogin);
router.post("/teacher-login", teacherLogin);

//Sellyna
router.get("/Teacher", teacherInfo);
router.get("/studentHelp", studentHelpInfo);
router.put("/updateData/:RequestID", updateReqData);

// Ranju
router.get("/teacher/progress", studentProgress);
router.get("/teacher/student", studentprofiles);

//Josh
router.get("/ProjectSubmissions", projectsubmissions);
router.get("/ProjectLibrary", projectlibrary);
router.put("/updateSubmissions/:SubmissionID", updateSubData);

module.exports = {
	router
};

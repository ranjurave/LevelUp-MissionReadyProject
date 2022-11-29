const db = require("../Config/database");

const projectsubmissions = (req, res) => {
  const sqlInsert = `SELECT ProgressHistory.StudentID, ProjectID, DateCompleted, Name, ProfilePic, Completed, DateSubmitted, SubmissionID from ProgressHistory
                            JOIN Student ON ProgressHistory.StudentID = Student.StudentID
                            order by StudentID ASC, ProjectID ASC;`;

  // `SELECT
  // DateSubmitted,
  // Submission,
  // Name,
  // ProfilePic,
  // Completed,
  // SubmissionID
  // FROM ProgressHistory, Student
  // ORDER BY DateSubmitted DESC`;
  db.query(sqlInsert, async (error, result) => {
    try {
      res.send(result);
    } catch {
      console.log(error);
    }
  });
};

const updateSubData = (req, res) => {
  const SubmissionID = req.params.SubmissionID;
  const RequestFilter = SubmissionID.split(",");
  db.query(
    "UPDATE missio20_team5.ProgressHistory SET ProgressHistory.Completed = 1 WHERE ProgressHistory.SubmissionID IN (?);",
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

module.exports = { projectsubmissions, updateSubData };

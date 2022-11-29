const db = require("../Config/database");

const studentprofiles = (req, res)=>{
    const studetnQuery = 'SELECT StudentID, Name, ProfilePic FROM missio20_team5.Student';
    db.query(studetnQuery, (error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(result);
        }
    });
}

module.exports = {studentprofiles};
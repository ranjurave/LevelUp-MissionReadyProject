const db = require("../Config/database");
const studentProgress = (req, res)=>{
    let submittedStudents;
    //Getting student names from project history removing duplicates
    const uniqueNameQuery = 'select distinct Student.Name from ProgressHistory inner join Student on ProgressHistory.StudentID = Student.StudentID'; 
    db.query(uniqueNameQuery,(error,resultNames)=>{
        if(error){
            console.log(error);
        }
        else{
            submittedStudents = resultNames;
        }
    });
    //Getting full list from project history
    const progressQuery = 'SELECT Student.Name, ProjectID, DateCompleted FROM ProgressHistory INNER JOIN Student ON ProgressHistory.StudentID = Student.StudentID';
    db.query(progressQuery, (error,projectHistoryTable)=>{
        if(error){
            console.log(error);
        }
        else{
            //creating a new json object with student names and project list
            //student name is taken from the unique studentlist from earlier query
            let progressHistoryList = [];
            const totalProjects = 15;
            //ittrate through unique student name list to create JSON object
            for(let i=0;i<submittedStudents.length;i++){
                let progressHistory = {
                    StudentID:'',
                    name:'',
                    projectStatusList :[],
                    projectsCompleted:0
                }
                let projectStatus = {
                    project:'',
                    completed:false
                    }
                let projectList = [];
                progressHistory.StudentID = i;
                progressHistory.name = submittedStudents[i].Name;
                //createing project list for each student
                for(let j=0; j<totalProjects; j++){
                    projectStatus = {project:`${j+1}`,completed:false};
                    projectList.push(projectStatus);
                }
                progressHistory.projectStatusList = projectList;
                progressHistoryList.push(progressHistory);                
            }
            
            //updating project status in json object with projects submitted
            for(let m=0;m<submittedStudents.length;m++){
                for(let n=0;n<projectHistoryTable.length;n++){
                    if(submittedStudents[m].Name===projectHistoryTable[n].Name){
                        progressHistoryList[m].projectStatusList[projectHistoryTable[n].ProjectID-1].completed = true;
                        progressHistoryList[m].projectsCompleted++;
                    }
                }
            }
            res.send(progressHistoryList);
        }
    });
}

module.exports = {studentProgress};
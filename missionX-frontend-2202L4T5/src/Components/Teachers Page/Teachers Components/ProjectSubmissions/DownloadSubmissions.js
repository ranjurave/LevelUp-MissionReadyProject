import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import styles1 from "./ProjectTopContainer.module.css";


export default function PDFdocument(){

const [projectSubmissions, setProjectSubmissions] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3002/ProjectSubmissions")
          .then((response) => {
            setProjectSubmissions(response.data);
            setFilteredProjects(
              projectSubmissions.filter((project) => project.Completed === 0)
            );
          })
          .catch((err) => console.log("Error: ", err));
      });

    
const exportPDF = () => {
  const unit = "pt";
  const size = "A4"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape
  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);
  doc.setFontSize(15);
  const title = "PROJECT SUBMISSIONS";
  const headers = [["Submission ID","Project ID", "Name", "Date Submitted"]];
  const data = projectSubmissions.map(elt=> [elt.SubmissionID, elt.ProjectID, elt.Name, elt.DateSubmitted]);
  let content = {
    startY: 50,
    head: headers,
    body: data
  };

  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.save("Project Submissions.pdf")
}
    return (
        <>
        <button className={styles1.rightside_button}  onClick={exportPDF}>
                  <img
                    className={styles1.topcontenticon}
                    src={require("./Icons/IconMaterial-file-download.png")}
                    alt=""
                  />
                  <h3 className={styles1.rightside_heading}>DOWNLOAD FILES</h3>
                </button>
        </>
    )
}
import React, {useState, useEffect} from "react";
import Projects from "./Projects";
// import "./ProjectsPageStudent.css";

const ProjectsData = () => {
  const [isLoading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("/projectbuilder");
      response = await response.json();
      setApiData(response);
      setLoading(false);
    }
    fetchAPI();
  }, []);

  return (
    <div className="ProjectContainer">
      <div>
        {apiData.map((e) => (
          <Projects
            key={e.ProjectID}
            image={e.Year}
            //   image={`data:image/jpg;base64,${btoa(
            //     String.fromCharCode(...new Uint8Array(e.Image.data))
            //   )}`} //Usually MainImage
            subject={e.SubjectMatter2} //e.g. Introduction
            course={e.Course} //e.g. Beginner
            activity={e.ActivityType} // e.g. animation
            completed={e.ProjectID}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsData;

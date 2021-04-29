import React, {useState, useEffect} from "react";
import LevelBar from "./LevelBar";
import "./ProjectBody.css";
import Projects from "./Projects";

function ProjectBody() {
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
    <div>
      <LevelBar />
      <div className="ProjectContainer">
        {/* <ProjectsData /> = test function */}
        {apiData.map((e) => (
          <Projects
            key={e.ProjectID}
            image={e.MainImage}
            // image={`data:image/PNG;base64,${btoa(
            //   String.fromCharCode(...new Uint8Array(e.Image.data))
            // )}`} //Usually MainImage
            subject={e.SubjectMatter2} //e.g. Introduction
            course={e.Course} //e.g. Beginner
            activity={e.ActivityType} // e.g. animation
            completed={e.ProjectID}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectBody;

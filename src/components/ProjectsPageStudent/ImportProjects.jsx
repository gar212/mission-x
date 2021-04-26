/*This will replace - Rows.jsx */
import React, {useState, useEffect} from "react";
import Projects from "./Projects";

/*'props' removed from () */
const LearningObjectives = () => {
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

  console.log(apiData);

  return (
    <div>
      {apiData.map((e) => (
        <Projects
          key={e.ProjectID}
          test={e.LearningObjective}
          completed={e.ProjectID}
        />
      ))}
    </div>
  );
};

{
  /* <LearningObjectivesLayout
          key={e.ProjectID}
          test={e.LearningObjective}
          completed={e.ProjectID}
        /> */
}

export default LearningObjectives;

// if (isLoading) {
//   return <div></div>;
// }

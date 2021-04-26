import React, {useState, useEffect} from "react";
import "./MakeProject.css";

const MakeProject = () => {
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
      <a href="https://scratch.mit.edu/" target="_blank">
        {isLoading ? (
          ``
        ) : (
          <div dangerouslySetInnerHTML={{__html: apiData[0].MakeAProject}} />
        )}
      </a>
    </div>
  );
};

export default MakeProject;

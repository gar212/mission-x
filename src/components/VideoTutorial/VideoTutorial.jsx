import React, {useState, useEffect} from "react";
import "./VideoTutorial.css";

const VideoTutorial = () => {
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
      {isLoading ? (
        ``
      ) : (
        <div dangerouslySetInnerHTML={{__html: apiData[0].Video}} />
      )}
    </div>
  );
};

export default VideoTutorial;

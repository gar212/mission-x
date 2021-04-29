import React, {useState, useEffect} from "react";
import "./LearningObjectives.css";

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
    <div className="LearningObjectives">
      {isLoading ? (
        ``
      ) : (
        <div dangerouslySetInnerHTML={{__html: apiData[0].LearningObjective}} />
      )}
    </div>
  );
};

export default LearningObjectives;

/*HTML below for webpage -> converted className to class */
// <div>
//   <div>
//     <h1 class="LearningObjectivesHeading">Explore Scratch blocks</h1>
//   </div>
//   <div>
//     <p class="LearningObjectivesSubHeading">
//       Learn the basic function of some basic scratch blocks such as “say,”
//       “wait,” “go to” and “hide.”
//     </p>
//   </div>
//   <div class="BlockContainer2">
//     <div class="LookBlocks2">
//       <h1 class="BlockHeading2">Look Blocks</h1>
//       <div class="BlockContainer2">
//         <div class="LookBlocksLeft">
//           <img
//             src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CG5Q5MHTMWK6ZG2YNAHIJB2QCDC%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=386&height=897&srcWidth=402&srcHeight=936"
//             alt="Look Block 1"
//             class="LookBlock1"
//           />
//         </div>
//         <div class="LookBlocksRight">
//           <img
//             src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CFMHWGYQ4GFJRALYPZZMZEC6U5G%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=396&height=198&srcWidth=396&srcHeight=198"
//             alt="Look Block 2"
//             class="LookBlock2"
//           />
//           <div>
//             <img
//               src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CBWNZY5RIDTRVEIAZQIVMLVH34L%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=154&height=96&srcWidth=154&srcHeight=96"
//               alt="Look Block 3"
//               class="LookBlock3"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="ControlBlocks2">
//       <h1 class="BlockHeading2">Control Blocks</h1>
//       <div class="BlockContainer2">
//         <div class="ControlBlocksLeft">
//           <img
//             src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CA6KYCPFEBYOBFJJVF4ZWPKP4LK%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=386&height=897&srcWidth=402&srcHeight=936"
//             alt="Control Block 1"
//             class="ControlBlock1"
//           />
//         </div>
//         <div class="ControlBlocksRight">
//           <img
//             src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CHCAI3FATIDGFA2E4OSU4IPVOQ7%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=326&height=116&srcWidth=326&srcHeight=116"
//             alt="Control Block 2"
//             class="ControlBlock2"
//           />
//         </div>
//       </div>
//     </div>
//     <div class="MotionBlocks2">
//       <h1 class="BlockHeading2">Motion Blocks</h1>
//       <div class="BlockContainer2">
//         <div class="MotionBlocksLeft">
//           <img
//             src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CDQSH4PYOI4YVHZB4U2MHCIJ4SV%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=380&height=897&srcWidth=394&srcHeight=932"
//             alt="Motion Block 1"
//             class="MotionBlock1"
//           />
//         </div>
//         <div class="MotionBlocksRight">
//           <img
//             src="https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CFVR6AOIXD7OVGJFEJ5F5NN3IXH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTI5ODAwMCIsImV4cCI6IjE2MTkzMTk2MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.VE1xM0FKL0xDcUVNSkx6RENsNjlrWTN2VnJiOEVDdlJaWDdieXpUMFY4Zz0&encodeFailures=1&width=408&height=194&srcWidth=408&srcHeight=194"
//             alt="Motion Block 2"
//             class="MotionBlock2"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;

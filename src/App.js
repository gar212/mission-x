import "./App.css";
import {Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProfileStudent from "./components/ProfileStudent/ProfileStudent.jsx";
import ProjectsPageStudent from "./components/ProjectsPageStudent/ProjectsPageStudent.jsx";
import HomeDashboard from "./components/HOME/HomeDashboard";


function App() {
  return (
    <div className="App">
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profilestudent" component={ProfileStudent} />
      <Route
        exact
        path="/projectspagestudent"
        component={ProjectsPageStudent}
      />
      <Route exact path="/home" component={HomeDashboard} />
    </div>
  );
}

export default App;

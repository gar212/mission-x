import "./App.css";
import {Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProfileStudent from "./components/ProfileStudent/ProfileStudent.jsx";
import ProjectBuilder1 from "./SM/Pages/ProjectBuilder1";
import ProjectsPageStudent from "./components/ProjectsPageStudent/ProjectsPageStudent.jsx";
import Test from "./components/Test.js";

function App() {
  return (
    <div className="App">
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profilestudent" component={ProfileStudent} />
      <Route exact path="/projectbuilder1" component={ProjectBuilder1} />
      <Route
        exact
        path="/projectspagestudent"
        component={ProjectsPageStudent}
      />
      <Route exact path="/test" component={Test} />
    </div>
  );
}

export default App;

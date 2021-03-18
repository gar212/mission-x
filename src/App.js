import "./App.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TeacherDashboard from "./components/TeacherDashboard";
import ProfileStudent from "./SM/Pages/ProfileStudent";
import ProjectBuilder1 from "./SM/Pages/ProjectBuilder1";
import ProjectsPageStudent from "./SM/Pages/ProjectsPageStudent";

function App() {
  return (
    <div className="App">
        <Route exact path="/teacherdashboard" component={TeacherDashboard} />
        <Route exact path="/projectspagestudent" component={ProfileStudent} />
        <Route exact path="/projectbuilder1" component={ProjectBuilder1} />
        <Route exact path="/projectpagestudent" component={ProjectsPageStudent} />
    </div>
  );
}

export default App;

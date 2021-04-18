import "./App.css";
import {Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProfileStudent from "./SM/Pages/ProfileStudent";
import ProjectBuilder1 from "./SM/Pages/ProjectBuilder1";
import ProjectsPageStudent from "./SM/Pages/ProjectsPageStudent";

function App() {
  return (
    <div className="App">
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profilestudent" component={ProfileStudent} />
      <Route exact path="/projectbuilder1" component={ProjectBuilder1} />
      <Route exact path="/projectpagestudent" component={ProjectsPageStudent} />
    </div>
  );
}

export default App;
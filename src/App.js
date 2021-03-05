import './App.css';
import {Route} from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  return (
    <div className="App">
  





    <Route exact path="/teacherdashboard" component={TeacherDashboard} />
    </div>
  );
}

export default App;

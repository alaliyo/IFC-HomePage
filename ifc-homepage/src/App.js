import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Introduce from './Pages/Introduce';
import SketchMap from './Pages/SketchMap';
import Calendar from './Pages/Calendar';

function App() {
  return <Router>
    <Switch>
      <Route path="/calendar">
        <Calendar />
      </Route>
      <Route path="/sketchMap">
        <SketchMap />
      </Route>
      <Route path="/introduce">
        <Introduce />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;

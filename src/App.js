import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import login from "./components/Login/login"
import signup from "./components/Signup/signup"
import dashboard from "./components/dashboard/dashboard"





function App() {
  return (
    <div className="App">





      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav>


        <Switch>


          <Route exact={true} path="/">
            <login />
          </Route>


          <Route path="/dashboard">
            <dashboard />
          </Route>


          <Route path="/signup">
            <signup />
          </Route>




        </Switch>

      </Router>



    </div>
  );
}

export default App;
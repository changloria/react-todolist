import './App.css';
import TodoList from './components/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DoneList from "./router/DoneList"
import UndoneList from "./router/UndoneList"

function App() {
  return (
    <><Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/" className="header-List">Todo</Link>
            </li>
            <li>
              <Link to="/done" className="header-List">Done</Link>
            </li>
            <li>
              <Link to="/undone" className="header-List">Undone</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <TodoList/>
          </Route>
          <Route exact path="/done">
            <DoneList/>
          </Route>
          <Route exact path="/undone">
            <UndoneList/>
          </Route>
        </Switch>
      </div>
    </Router></>
  );
}

export default App;

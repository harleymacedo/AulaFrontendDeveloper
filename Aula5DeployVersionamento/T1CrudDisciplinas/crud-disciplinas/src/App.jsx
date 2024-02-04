import './App.css'
import Login from './components/Login'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/create">Create</Link>
                        </li>
                        <li>
                            <Link to="/read">Read</Link>
                        </li>
                        <li>
                            <Link to="/update">Update</Link>
                        </li>
                        <li>
                            <Link to="/delete">Delete</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/read">
                            <Read />
                        </Route>
                        <Route path="/update">
                            <Update />
                        </Route>
                        <Route path="/delete">
                            <Delete />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <h1>Sistema de Disciplinas</h1>
            <p>Desenvolvido para as aulas de PSW1 e PSW2 do IFCE Campus Crato</p>
        </div>
    )
}

export default App

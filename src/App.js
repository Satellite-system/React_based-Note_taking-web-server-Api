import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from './components/Login';
import Signup from "./components/Signup";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} />
          <Switch>
            <Route exact path="/"><Alert alert={alert} /><Home showAlert={showAlert}/></Route>
            <Route exact path="/login"><Alert alert={alert} /><Login showAlert={showAlert}/></Route>
            <Route exact path="/signup"><Alert alert={alert} /><Signup showAlert={showAlert}/></Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

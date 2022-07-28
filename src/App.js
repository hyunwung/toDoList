import './App.css';
import Apps from "./components/ex/Apps";
import {Route,Router,Routes} from "react-router-dom"
import NotFound from './NotFound';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>} ></Route>
        <Route path="/apps" element={<Apps></Apps>}></Route>
      </Routes>
    </div>
  );
}

export default App;

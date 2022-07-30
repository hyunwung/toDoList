import './App.css';
import {Route,Routes} from "react-router-dom"
import Todo from "./components/Todo/Todo";
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Todo></Todo>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/detail/:id`} element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

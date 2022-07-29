import './App.css';
import {Route,Router,Routes,useParams} from "react-router-dom"
import NotFound from './NotFound';
import Login from './components/login/Login';
import Detail from './components/Detail/Detail';

// const UserId = ()=>{
//   const params = useParams();
//   return <div>UserId is {params.id}</div>
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

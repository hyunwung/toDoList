import './App.css';
import ToDo from './components/todos/ToDo';
function App() {
  let lists = ["영화관 가기","책 읽기","수영 배우기"]
  return (
    <div className="App">
      <ToDo></ToDo>
    </div>
  );
}

export default App;

import "./Todo.css";
import Submit from "../Submit/Submit";
import ToDoContent from "../ToDoContent/ToDoContent";
import Progress from '../Progress/Progress';

const Todo = () => {
    return (
        <div className="container">
            <div className='container lay'>
                <h1>내 버킷 리스트</h1>
                <Submit></Submit>
                <Progress></Progress>
                <ToDoContent></ToDoContent>
            </div>
            
        </div>
    )
}

export default Todo;
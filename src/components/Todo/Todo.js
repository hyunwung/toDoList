import "./Todo.css";
import { useDispatch,useSelector } from "react-redux";
import Submit from "../Submit/Submit";
import ToDoContent from "../ToDoContent/ToDoContent";

const Todo = () => { 
    // redux
    const content = useSelector((state) =>state.content);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h1>내 버킷 리스트</h1>
            <Submit></Submit>
            <ToDoContent></ToDoContent>
        </div>
    )
}

export default Todo;
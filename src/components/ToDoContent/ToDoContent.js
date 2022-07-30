import React from 'react';
import "./ToDoCotent.css";
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import { toggleComplete, deleteTodo } from "../../redux/modules/bucket";

const ToDoContent = () => {
    const content = useSelector((state) =>state.content);
    const dispatch = useDispatch();

    const deleteTodos = (id) =>{
        dispatch(deleteTodo({id:id}))
    }
    const checkTodo = (completed,id) =>{
        dispatch(toggleComplete({id:id,completed:!completed}))
    }
    return (
    <>
        <hr className='line'></hr>
        <div className='working'>Work !
            {content.map((contents) => (
                <div className={`todo-items ${contents.completed ? "uncompleted" : "completed"}`} key={contents.id}>
                    <Link to={`/detail/${contents.id}`} className="detail">상세보기</Link>
                        <div className="todo-item">{contents.text}
                            <div className="items">{contents.subText}</div>
                            <button onClick={()=>deleteTodos(contents.id)}>삭제</button>
                            <button onClick={()=>checkTodo(contents.completed,contents.id)}>완료</button>
                </div>
            </div>
        ))}
        </div>
        <hr></hr>
        <div className='done'>Done !
            {content.map((contents) => (
                <div className={`todo-items ${contents.completed ? "completed" : "uncompleted"}`} key={contents.id}>
                    <Link to={`/detail/${contents.id}`} className="detail">상세보기</Link>
                        <div className="todo-item" key={contents.id}>{contents.text}
                            <div className="items">{contents.subText}</div>
                            <button onClick={()=>deleteTodos(contents.id)}>삭제</button>
                            <button onClick={()=>checkTodo(contents.completed,contents.id)}>완료</button>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default ToDoContent;
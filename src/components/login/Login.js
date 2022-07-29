import "./Login.css";
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux";
import {addTodo,toggleComplete,deleteTodo} from "../../redux/modules/bucket";

const Login = () => {
    const [inputTitle,setinputTitle] = useState("")
    const [inputContent,setinputContent] = useState("")

    // redux
    const content = useSelector((state) =>state.content);
    const dispatch = useDispatch();
    
    const titleTodos = (e) =>{
        setinputTitle(e.target.value);
    }
    const contentTodos = (e) => {
        setinputContent(e.target.value);
    }
    const submitTodos = (e) =>{
        e.preventDefault();
        if(inputContent==="" || inputTitle===""){
            alert("둘 다 작성해야 한다.")
            return
        }
        dispatch(addTodo({
            text:inputContent,
            subText:inputTitle,
        }))
        setinputTitle("");
        setinputContent("");
    }
    const deleteTodos = (id) =>{
        dispatch(deleteTodo({id:id}))
    }
    const checkTodo = (completed,id) =>{
        dispatch(toggleComplete({id:id,completed:!completed}))
    }
  return (

    <div className='container'>
        <h1>내 버킷 리스트</h1>
            <form>
                <input value={inputTitle} onChange={titleTodos} placeholder="제목을 적거라" className='todo-get' type="text"></input>
                <input value={inputContent} onChange={contentTodos} placeholder="할 일을 적거라" className='todo-get' type="text"></input>
                <button type='submit' onClick={submitTodos}>제2출</button>
            </form>
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
        </div>
  )
}

export default Login
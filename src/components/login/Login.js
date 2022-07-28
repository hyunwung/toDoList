import "./Login.css";
import React, { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import {addTodo,toggleComplete,deleteTodo} from "../../redux/modules/bucket";

const Login = () => {
    const [checkpoint, setChcekpoint] = useState(false); // 로그인 관련
    const [name,setName] = useState(""); //로그인 관련 2
    const [inputTitle,setinputTitle] = useState("")
    const [inputContent,setinputContent] = useState("")
    
    // redux
    const content = useSelector((state) =>state.content);
    const dispatch = useDispatch();
    // const handleDispatch = () =>{
    //     dispatch({
    //         type:"list"
    //     })
    // }
    const nameSetFunc = (e) =>{     // 로그인 관련 1
        setName(e.target.value);
    }
    const addProfile = (e) => {     // 로그인 관련 2
        e.preventDefault();
        if(name===""){
          alert("이름을 입력하거라")
          return
        }
        else{
          setName("")
          alert(name+" 이여 ..... 사용을 허가한다.")
          setChcekpoint(!checkpoint)
        }
    }
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
        // content([...content,
        //     {text:inputContent,id:Math.random()*1000,completed:false,subText:inputTitle}
        // ])
        // dispatch(createTodoId({text:inputContent,id:Math.random()*1000,completed:false,subText:inputTitle}))
        dispatch(addTodo({
            text:inputContent,
            subText:inputTitle,
        }))
        setinputTitle("");
        setinputContent("");
    }
    function deleteTodos(id){
        dispatch(deleteTodo({id:id}))
    }
    function checkTodo(completed,id){
        // content(content.map((contents)=>(
        //     contents.id === id ? {...contents, completed: !contents.completed} : contents
        // )))
        dispatch(toggleComplete({id:id,completed:!completed}))
    }
  return (

    <div className='container'>
        <h1>내 버킷 리스트</h1>
        <form className="todo-form" style={{display: checkpoint===false ? "inline" : "none"}}>
            <input value={name} onChange={nameSetFunc} placeholder="이름을 쓰거라"></input>
            <button type='submit' onClick={addProfile}>제1출</button>
        </form>
        <div className={`profile ${checkpoint ? "todo-active" : "todo-none"}`}>
            <form>
                <input value={inputTitle} onChange={titleTodos} placeholder="제목을 적거라" className='todo-get' type="text"></input>
                <input value={inputContent} onChange={contentTodos} placeholder="할 일을 적거라" className='todo-get' type="text"></input>
                <button type='submit' onClick={submitTodos}>제2출</button>
            </form>
            <hr className='line'></hr>
            <div className='working'>Working !
                {content.map((contents) => (
                    <div className={`todo-item ${contents.completed ? "uncompleted" : "completed"}`} key={contents.id}>할일 : {contents.text}
                        <div>코멘트 : {contents.subText}</div>
                        <button onClick={()=>deleteTodos(contents.id)}>삭제</button>
                        <button onClick={()=>checkTodo(contents.completed,contents.id)}>완료</button>
                    </div>
                ))}
            </div>
            <div className='done'>Done !
                {content.map((contents) => (
                    <div className={`todo-item ${contents.completed ? "completed" : "uncompleted"}`} key={contents.id}>할일 : {contents.text}
                        <div>코멘트 : {contents.subText}</div>
                        <button onClick={()=>deleteTodos(contents.id)}>삭제</button>
                        <button onClick={()=>checkTodo(contents.completed,contents.id)}>취소</button>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Login
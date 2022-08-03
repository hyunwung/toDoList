import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/bucket";
import "./Submit.css";

const Submit = () => {
    // redux
    const dispatch = useDispatch();

    const [inputTitle,setinputTitle] = useState("")
    const [inputContent,setinputContent] = useState("")

    const titleTodos = (e) =>{ // 제목 선택
        setinputTitle(e.target.value);
    }
    const contentTodos = (e) => { // 내용 선택
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
    return (
        <form className='sumbits'>
            <input value={inputTitle} onChange={titleTodos} placeholder="제목을 적거라" className='todo-get' type="text"></input>
            <input value={inputContent} onChange={contentTodos} placeholder="할 일을 적거라" className='todo-get' type="text"></input>
            <button type='submit' onClick={submitTodos}>제2출</button>
        </form>
    )
}

export default Submit;
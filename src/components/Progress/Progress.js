import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = () => {
  const todoList = useSelector((state)=>state.content)
  let count = 0;
  todoList.map((todo,index)=>{
    if(todo.completed===true){
        count++
    }
  })
  return (
    <ProgressBar>
        <HighLight width={(count/todoList.length)*100+"%"}></HighLight>
        <Dot></Dot>
    </ProgressBar>
  )
}
const ProgressBar = styled.div`
    margin:10px auto;
    width:96%;
    height:30px;
    background-color:#eee;
    display:flex;
    align-items: center;
    border-radius : 10px;
`
const HighLight = styled.div`
    background-color:slateblue;
    width:${(props)=>props.width};
    border-radius : 10px;
    transition:1s;
    height:30px;
    color:gray;
`
const Dot = styled.div`
    width:25px;
    height:25px;
    background:#fff;
    border:5px solid #673ab7;
    border-radius : 25px;
    margin: 0 0 0 -19px;
`
export default Progress;
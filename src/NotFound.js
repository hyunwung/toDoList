import React from 'react'
import {useParams} from "react-router-dom"

const NotFound = () => {
    const history  = useParams();
  return (
    <>
        <div>NotFound</div>
        <div>주소를 찾을 수 없습니다.</div>
        <button onClick={()=>{}}></button>
    </>
  )
}

export default NotFound;
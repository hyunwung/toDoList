import React from 'react';
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import "./ScrollUp.css";

const ScrollUp = () => {
  return (
        <BsFillArrowUpCircleFill className='upbtn' onClick={()=>{
            window.scrollTo({top:0,left:0,behavior:"smooth"});
        }}>
        </BsFillArrowUpCircleFill>
    
  )
}

export default ScrollUp
import "./Detail.css";
import React from 'react';
import {useParams ,Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";

styled.button`
    margin-top: 5px;
    float: right;
    height: 30px;
`;
const Detail = () => {
    const params = useParams(); // id 가져와.
    //redux
    const content = useSelector((state) =>state.content);
    return (
        <div className="detail-back">
            <div>id : {params.id}</div>
            <div className="detail-page">
            {content.map((e)=>{
                if (e.id === params.id){
                    return(
                        <div>
                            <div key={params.id} className="detail-content">{e.text}</div>
                            <div className="detail-content">{e.subText}</div>
                        </div>
                    )
                        }
                    })}
            </div>
            <Link to={`${process.env.PUBLIC_URL}/`}><button className="detail-btn">뒤로가기</button></Link>
        </div>
    )
}

export default Detail
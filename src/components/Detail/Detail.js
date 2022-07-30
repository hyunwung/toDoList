import "./Detail.css";
import React from 'react';
import {useParams ,Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

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
                    return  <div key={params.id}>{e.text}
                                <div>{e.subText}</div>
                            </div>   
                        }
                    })}
            </div>
            <Link to={"/"}><button className="detail-btn">뒤로가기</button></Link>
        </div>
    )
}

export default Detail
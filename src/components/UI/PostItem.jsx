import { Card } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import PostService from "../../API/PostService";
import { useFetching } from "../../hooks/useFetching";

export const PostItem = (props) => {
  
    const route = useHistory()

    return(
        <div className="post">
        <div className="post__content">
          <img style={{width:"70px", height:"70px", objectFit:"cover"}} src={props.post.image} alt="daw" />
          <strong>{props.post.id} {props.post.name}</strong>
          <div>
            {props.post.description}
          </div>
          <div className="post__btns">
          <button onClick={() => route.push(`/vacancies/${props.post.id}`)}>Открыть</button>
          </div>

          
        </div>
      </div>
    )
}

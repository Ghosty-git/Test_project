import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';


const VacanciesById = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
        console.log(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])


    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            <div>{post.name}. {post.description}</div>
        </div>  
    );
};

export default VacanciesById;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostService from '../API/PostService';
import { PostItem } from '../components/UI/PostItem';
import { PostList } from '../components/UI/PostList';
import { useFetching } from '../hooks/useFetching';
import banner from "../img/ybanner-1.jpg"
const Vacancies = () => {
    
    const [posts, setPosts] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {

        const response = await PostService.getJobs()
        setPosts(response.data)
    })

    useEffect(() => {
        fetchPosts()
    }, [])
    
    return (
        <div>
            <div style={{backgroundImage:`url(${banner})`, height:"330px", width:"100%", zIndex:"1", backgroundRepeat:"no-repeat", backgroundColor:"#FFD304", backgroundPosition:"right" }}>
                <h1>Вакансии</h1>
            </div>
            <div className='background-card'>
                <PostList
                posts={posts}
                />
            </div>
        </div>
    );
};

export default Vacancies;

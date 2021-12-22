import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import banner from "../img/ybanner-1.jpg"

const Home = ({id, name, country, worktime}) => {
    // const [post, setPost] = useState([])
    async function fetchPosts() {
        const response = await axios.get("https://zainkg.pythonanywhere.com/api/v1/jobs/all/")
        console.log(response.data)
    }
        
    useEffect(() => {
        fetchPosts()
    }, [])
        
    return (
        <div>
           <div style={{backgroundImage:`url(${banner})`, height:"330px", width:"100%", zIndex:"1", backgroundRepeat:"no-repeat", backgroundColor:"#FFD304", backgroundPosition:"right" }}>
            <h1 style={{zIndex:"2", }}>Главная</h1>
            <button onChange={fetchPosts}>GET</button>
            </div>
            
        </div>
    );
};

export default Home;
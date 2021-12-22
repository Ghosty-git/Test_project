import React from 'react';
// import { Banner } from '../components/UI/Banner/Banner';
import banner from "../img/ybanner-1.jpg"
const Contact = () => {
    return (
        <>
        
        <div style={{backgroundImage:`url(${banner})`, height:"330px", width:"100%", zIndex:"1", backgroundRepeat:"no-repeat", backgroundColor:"#FFD304", backgroundPosition:"right" }}>
        <h1>контакты</h1>
        </div>
        </>
    );
};

export default Contact;
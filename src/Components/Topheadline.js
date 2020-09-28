import React, { useEffect, useState } from 'react';
import Pula from './Pula';

const Topheadline = () => {
    const [articles,setarticles]=useState([])
    useEffect(()=>{
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=cc4f29e3b88b4bab94635d70fd499f91')
        .then(res=>res.json())
        .then(data=>setarticles(data.articles))
    },[])
    return (
        <div>
            <h1>top headline:{articles.length}</h1>
            {articles.map(article=><Pula article={article}></Pula>)}
        </div>
    );
};

export default Topheadline;
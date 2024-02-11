import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import { db } from '../../config/firebaseConfig';
import { getDocs, collection, query, where, limit } from 'firebase/firestore';
import './home.css'
import { useNavigate } from 'react-router-dom';


export default function HomePage() {

    const navigate = useNavigate();
    const [selectedArticles, setSelectedArticles] = useState([]);

    useEffect(()=>{
        const articleRef = collection(db, "articles");
        const q = query(articleRef, where("isSelected", "==",  true), limit(5))
        getDocs(q, articleRef)
        .then(res=>{
            const articles = res.docs.map(item=>({
                id: item.id,
                ...item.data()
            }))
            setSelectedArticles(articles)
        })
    })

    return (
        <div className='home-page-layout'>
            <Banner />
            <div className="selected-articles">
                <h1>Editor's Choice</h1>
                {
                    selectedArticles?.map(item=>{
                        return (
                            <div className='selected-article-item' key={item.id} onClick={()=>navigate(`/article/${item.id}`)} >
                                <img src={item.imageUrl} alt={item.title} className='selected-image' />
                                <div className='selected-info'>
                                    <h2>{item.title}</h2>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                            )})
                }
            </div>
        </div>
    )
}
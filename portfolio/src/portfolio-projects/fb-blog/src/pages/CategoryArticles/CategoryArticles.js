import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './CategoryArticles.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { where, collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export default function CategoryArticles() {

  const {categoryName} = useParams();
  const [articles, setArticles] = useState();

  useEffect(()=>{
    const articleRef = collection(db, 'articles')
    const q = query(articleRef, where('category', '==', categoryName))
    getDocs(q, articleRef)
    .then(res=>{
      const articles = res.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))
      setArticles(articles)
    })
    .catch(err=>{
      console.log(err);
      if (err.message === "Quota exceeded.") {
        alert("Error: The daily quota for Firebase calls has been met.  Please try again later.")
      }
    })
  }, [categoryName])

  return (
    <div className='category-articles'>
      {
        articles?.map(item => {
          return <ArticleCard key={item.id} article={item} />
        })
      }
    </div>
  )
}
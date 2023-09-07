import React, { useEffect, useState } from 'react';
import './banner.css';
import { db } from '../../config/firebaseConfig';
import { getDocs, collection, query, limit, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function Banner() {

  const [mainArticle, setMainArticle] = useState('');
  const [otherArticles, setOtherArticles] = useState('');
  let navigate = useNavigate();

  useEffect(()=> {
    const articleRef = collection(db, "articles");
    const q = query(articleRef, orderBy("createdAt", "desc"), limit(5));

    getDocs(q, articleRef)
    .then(res=>{
      console.log(res)
      const articles = res.docs.map(item=>({
        id: item.id,
        ...item.data()
      }))
      setMainArticle(articles[0])
      console.log(mainArticle)
      setOtherArticles(articles?.splice(1))
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message)
      if (err.message === "Quota exceeded.") {
        alert("Error: The daily quota for Firebase calls has been met.  Please try again later.")
      }
    })
  }, [])

  return (
    <div className='banner-container'>
      <div className='main-article-container' style={{backgroundImage: `url(${mainArticle.imageUrl})`}}  onClick={() => {navigate(`article/${mainArticle.id}`)}}>
        <div className='banner-info'>
          <h2>{mainArticle.title}</h2>
          <p>{mainArticle.createdAt?.toDate().toDateString()}</p>
        </div>
      </div>
      <div className='other-articles-container'>
        {
          otherArticles && otherArticles.map(item => {
            return (
              <div key={item.id} className='other-article-item' onClick={() => {navigate(`article/${item.id}`)}} style={{backgroundImage: `url(${item.imageUrl})`}}>
                <div className='banner-info'>
                  <h2>{item?.title}</h2>
                  <p>{item?.createdAt?.toDate().toDateString()}</p>
                </div>
              </div>
            )})
        }
      </div>
    </div>
  )
}
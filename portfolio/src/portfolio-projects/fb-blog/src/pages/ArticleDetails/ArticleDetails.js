import React, { useEffect, useState } from 'react'
import './articleDetails.css'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Likes from '../../components/Likes/Likes';
import Comments from '../../components/Comments/Comments';
import { ToastContainer } from 'react-toastify';

export default function ArticleDetails() {

  const {articleId}=useParams();
  const [article, setArticle] = useState('');

  useEffect(()=>{
    const docRef = doc(db, 'articles', articleId)
    getDoc(docRef)
    .then(res=>setArticle(res.data()))
    .catch(err=>{
      console.log(err);
      if (err.message === "Quota exceeded.") {
        alert("Error: The daily quota for Firebase calls has been met.  Please try again later.")
      }
    })
  }, [])

  return (
    <div className='details-contianer'>
      <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <h1>{article?.title}</h1>
      <h2>{article?.summary}</h2>
      <div className='details-info-container'>
        <p><span className='article-span'>Author: </span>{article?.createdBy?.toUpperCase()}</p>
        <p><span className='article-span published'>Published: </span> {article?.createdAt?.toDate().toDateString()}</p>
       <Likes articleId={articleId} />
      </div>
      <div style={{borderBottom: 'solid 1px black', paddingBottom: '10px', marginBottom: '10px'}}>
        <img className='details-image' src={article?.imageUrl} alt={article} />
        <p className='article-description'>{article?.paragraph1}</p>
        <p className='article-description'>{article?.paragraph2}</p>
        <p className='article-description'>{article?.paragraph3}</p>
      </div>
      <Comments articleId={articleId} />
    </div>
  )
}
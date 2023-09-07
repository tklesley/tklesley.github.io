import React from 'react';
import './articleCard.css';
import { Link } from 'react-router-dom';

export default function ArticleCard({article}) {
  return (
    <Link to={`/article/${article?.id}`} >
      <div className='article-card'>
        <img src={article?.imageUrl} alt="article"/>
        <div className='article-card-info'>
          <p> {article?.title} </p>
        </div>
      </div>
    </Link>
  )
}
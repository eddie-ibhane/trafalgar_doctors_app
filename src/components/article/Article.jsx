import React from 'react';
import './article.css';

const Article = ({image,title, text}) => {
  return (
    <>
        <div className='article mr-4'>
            <div className='article-image'>
                <img src={image} alt='article' />
            </div>
            <div className='article-content'>
                <div className='article-title'>
                    <h3>{title}</h3>
                </div>
                <div className='article-body'>
                    <p>{text}</p>
                </div>
                <div className='article-link'>
                    <a href='#read more'>Read more <i className='fa fa-arrow-right ml-2'></i> </a>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Article

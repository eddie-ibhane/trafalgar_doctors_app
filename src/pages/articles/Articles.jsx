import React from 'react';
import './articles.css';
import Button from '../../components/button/Button';
import Article from '../../components/article/Article';
import Image from '../../assets/article1.png';
import Image2 from '../../assets/article2.png';
import Image3 from '../../assets/article3.png';

const Articles = () => {
  return (
    <>
        <div className='articles-section container'>
            <div className='articles-title'>
                <h1 className='content-title'>Check out our latest article</h1>
                <div className='line'></div>
            </div>
            <div className='articles-container'>
                <Article image={Image} title="Disease detection, check up in the laboratory" text="In this case, the role of the health laboratory is very important to do a disease detection..."/>
                <Article image={Image2} title="Disease detection, check up in the laboratory" text="In this case, the role of the health laboratory is very important to do a disease detection..."/>
                <Article image={Image3} title="Disease detection, check up in the laboratory" text="In this case, the role of the health laboratory is very important to do a disease detection..."/>
            </div>
            <div className='articles-cta-btn'>
                <Button text="View all"/>
            </div>
        </div> 
    </>
  )
}
export default Articles

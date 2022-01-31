import React , {useState} from 'react'
import styles from './styles.module.scss'
import Article from './Article'
import source from '../source.json'
import { useSelector } from 'react-redux'


const News = () => {
  
    const news = useSelector(state => state.likesCounter.value)
    return (
        <section className={styles.news}>{
            news.map((item, key)=>{
                return <Article key={key} newsArray={item}  />
            })}
        </section>
    );
};

export default News;
import React , {useState} from 'react'
import styles from './styles.module.scss'
import Article from './Article'
import source from '../source.json'



const News = () => {
    const [news, setNews] = useState(source);
    return (
        <section className={styles.news}>{
            news.map((item, key)=>{
                return <Article key={key} newsArray={item} update={setNews} />
            })}
        </section>
    );
};

export default News;
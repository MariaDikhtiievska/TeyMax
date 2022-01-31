import React from 'react';
import styles from './styles.module.scss'
import CommentsCounter from "../elements/CommentsCounter"
import LikesCounter from '../elements/LikesCounter'
import Tag from '../elements/Tag'



const Article = ({newsArray, update }) => {
    return (
        <section className={styles.article}>
            <header>
                <div className={styles.poster}>
                    <img src={newsArray.image} alt="" />
                </div>
                <div className={styles.tags}>
                    <div>
                        <Tag tags={newsArray.tags[0]} />
                    </div>
                    <div>
                        <Tag tags={newsArray.tags[1]} />
                    </div>
                </div>
            </header>
            <article>
                <h1>{newsArray.title}</h1>
                <p>{newsArray.description}</p>
            </article>
            <footer>
                <span>{newsArray.published}</span>
                <div className={styles.controls}>
                    <CommentsCounter comments={newsArray.comments} />
                    <LikesCounter id={newsArray.id} likes={newsArray.likes}  />
                </div>
            </footer>
        </section>);
};

export default Article;
import React from 'react';
import styles from '../components/styles.module.scss'


const CommentsCounter = ({comments}) =>{
return (<span className={styles.commentsCounter}>{comments}</span>)}

export default CommentsCounter;

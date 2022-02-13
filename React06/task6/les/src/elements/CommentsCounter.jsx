import React from 'react';
import styles from '../components/styles.module.scss'
import PropTypes from 'prop-types';

const CommentsCounter = ({comments}) =>{
return (<span className={styles.commentsCounter}>{comments}</span>)}

CommentsCounter.propTypes={
    comments:PropTypes.number
}

export default CommentsCounter;

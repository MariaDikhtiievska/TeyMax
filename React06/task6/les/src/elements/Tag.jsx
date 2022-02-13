import React from 'react';
import styles from '../components/styles.module.scss'
import PropTypes from 'prop-types';

const Tag = ({tags}) =>{
return (<span className={styles.tag}>{tags}</span>)}

Tag.propTypes = {
    tag: PropTypes.string
}
export default Tag;

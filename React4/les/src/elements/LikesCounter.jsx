import React, {useState} from 'react'
import styles from '../components/styles.module.scss'


import {  useDispatch } from 'react-redux'
import { update } from '../likesSlice'

const LikesCounter = ({ id, likes }) => {
    
  const dispatch = useDispatch()
    const [liked,setlike] = useState(false)
    
     const addLike = () => {
         setlike(!liked)
         dispatch(update({liked,id}))

     };
     const style = {
         color: liked? 'red' : 'black'
     }
     
     return (<span style={style} onClick={addLike} className={styles.likesCounter} id={id}>{likes}</span>)
 }
 
 export default LikesCounter;

/*
const LikesCounter = ({ id, likes, update }) => {
   const [liked,setlike] = useState(false)
   
    const addLike = () => {
        setlike(!liked)
        update((arr)=> arr.map(item => {
            if (item.id === id) {
                const likes = liked ? item.likes - 1 : item.likes + 1

                return {
                    ...item,
                    likes: likes
                }
            }
            return item
        }))

    };
    const style = {
        color: liked? 'red' : 'black'
    }
    
    return (<span style={style} onClick={addLike} className={styles.likesCounter} id={id}>{likes}</span>)
}

export default LikesCounter;
*/
import React, {useState} from 'react'
import styles from '../components/styles.module.scss'


const LikesCounter = ({ id, likes, update }) => {
   const [liked,setlike] = useState(false)
    const addLike = () => {
        setlike(!liked)
        update((arr)=>arr.map(item=>{
            if(item.id===id){
                if(liked){
                    item.likes -= 1
            
                }else{
                    item.likes += 1
                 }
            }
            return item
        }))

    };
    
    return (<span onClick={addLike} className={styles.likesCounter} id={id}>{likes}</span>)
}

export default LikesCounter;
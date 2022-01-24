import React from "react"
import { useState } from "react/cjs/react.development"
import styles from '../components/accordionStyles.module.scss'



const AccordionItem =(props)=>{
  const [openAnswer, setOpen] = useState(false)
  const showAnswer = ()=> setOpen(!openAnswer)

  return (
  <div className={`${styles.accordion_item} ${openAnswer?styles.selected:null}`} onClick={showAnswer} >
    <div className={styles.accordion_question}> 
      <span >{props.accordion.question}</span>
    </div>
    <p className={styles.accordion_answer}>
      {props.accordion.answer}
    </p>
  
</div>
  )
}


export default AccordionItem
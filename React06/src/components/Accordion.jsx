
import React , {useState} from 'react'
import styles from './accordionStyles.module.scss'
import source from '../acordion.json'
import AccordionItem from '../elements/AcCItem'


const Acordion = ()=>{
  const [accordion, setAccordion] = useState(source)
  /*
  return <section className={styles.accordion}>
  <h1>Accordion</h1>
  <div className={styles.accordion_item}>
    <div className={styles.accordion_question}>
      <span>1. What business are you doing?</span>
    </div>
    <p className={styles.accordion_answer}>
      In the past few years India has made attempts
      to get back several historic items. Some historians
      claim that the Kohinoor was taken away from India by force.
    </p>
  </div>
  </section>
  */
   return (
    <section className={styles.accordion}>
      {accordion.map((item, key)=>{
            return <AccordionItem key={key}  accordion={item} />
        })}
    </section>
);
}


export default Acordion
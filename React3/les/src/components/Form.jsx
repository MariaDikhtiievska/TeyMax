import React,{useState} from "react";
import styles from '../components/form.module.scss'
import classNames from "classnames";
import { Component } from 'react'
import Select from 'react-select'

export function Form (){
    const [name, setName] = useState('')

    const [SurName, setSurName] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('male')
    const [time, setTime] = useState('')
    const [accepted, setAcception] = useState('')

    function hendleNameChange(event){
        setName(event.target.value)
    }

    function hendleSurNameChange(event){
        setSurName(event.target.value)
    }
    function hendleTimeChange(event){
        setName(event.target.value)
    }
    function hendleEmailChange(event){
        setEmail(event.target.value)
    }
    function hendleSexChange(event){
        setSex(event.target.value)
    }
    function hendleAcceptionChange(event){
        if(!event.target.value)
            setAcception('did not acccept')
        setAcception('accepted')
    }

    function Submit(event){
        console.log(
            name,
            SurName,
            email,
            sex,
            accepted
            )
        event.preventDefault()
    }

    const times = ['1:00','7:00','19:30']
       
      
      const options = times.map((text, index) => {
        return <option key={index}>{text}</option>;
     });
      
//<Select options={options}/>

    return (
        <form onSubmit={Submit} className={styles.form} >
            <div className={styles.form_group}>
            <h1>Fill the Form</h1>
            
            <label>Name <br/>
                <input type="text" value={name} onChange={hendleNameChange}></input>
            </label><br/>
            <label>SurName <br/>
                <input type="text" value={SurName} onChange={hendleSurNameChange}></input>
            </label><br/>
            
            <label>Time  <br/><select value={time} onChange={hendleTimeChange}>
         {options}
      </select></label>
            <label>Email <br/>
                <input type="email" value={email} onChange={hendleEmailChange}></input>
            </label>
            
            
            <label>Sex <br/>
                <div>
                Male<input type="radio" value="male" checked={sex == "male"? true : false} onChange={hendleSexChange}></input>
                Female<input type="radio" value="female" checked={sex == "female"? true : false} onChange={hendleSexChange}></input>
                My variant<input type="radio" value="my variant" checked={sex == "my variant"? true : false} onChange={hendleSexChange}></input>
                </div>
               
            </label><br/>
            <label>I've read and accept all the rules 
                <input type="checkbox" checked={accepted} onChange={hendleAcceptionChange}></input>
            </label><br/>
        
            <input type="submit" value="Submit"></input>
            </div>
        </form>
    )

}
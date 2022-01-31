import React from "react";
import { increment,decrement } from "../ConnectCounterSlice";
import {connect} from 'react-redux'


function Counter (props){
     console.log(props)
    return (
        <div>
           
            <button onClick={props.increment}>Increment</button>
            <h2> {props.connectCounter.value}</h2>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )    
}

const mapStateToProps = state =>{
    return {
        connectCounter: state.connectCounter
    }
    
}

const mapDispachToProps = dispatch =>{
    return{
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement())
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Counter)
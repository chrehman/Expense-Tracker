import React,{useReducer} from 'react'
import numberReducer from './numberReducer'
export default function Child2() {
    
    let  [state, dispatch] = useReducer(numberReducer, 55);
    return (
        <div>
            <p>Hello From Child2</p>
            <h1>Number : {state}</h1>

            <button onClick={()=>{dispatch({type:"INCREMENT" ,val:55});}}>Increament From reducer</button>
            <button onClick={()=>{dispatch({type:"DECREMENT",val:5});}}>Decreament From reducer</button>

        </div>
    )
}

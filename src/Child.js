import React,{useContext} from 'react'
import ValueContext from './ValueContext'

export default function Child() {
    
    let value =useContext(ValueContext);
    console.log(value);
    return (
        <div>
            <h3>Value is :{value[0]}</h3>
            <button onClick={()=> value[1](++value[0])}>Increament Value From Context API</button>
            <button onClick={()=> value[1](--value[0])}>Decreament Value From Context API</button>
        </div>
    )
}

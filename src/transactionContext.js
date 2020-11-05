import React,{createContext,useReducer} from 'react'
import TransactionReducer from './transReducer';

const initialTransaction=[
    {amount:100, desc :'Cash',id:0},
    {amount:-50, desc :"Tea",id:1},
    {amount:-1000, desc:"Mobile",id:2},
    {amount:1000, desc:"Cash",id:3}
]

export const TransactionContext=createContext(initialTransaction);
// console.log("TRANSACTION");
console.log(TransactionContext._currentValue);
export const TransactionProvider=({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, TransactionContext._currentValue);
    // console.log(state);
    function addTransaction(transObj){
        dispatch({
            type:"Add Transaction",
            payload:{
                amount:transObj.amount,
                desc:transObj.desc,
                id:transObj.id
            }
        })
        
    }
    function delTransaction(id){
        console.log("Del Called");
        dispatch({
            type:"Delete Transaction",
            id:id
        })
    }


    return(
        <TransactionContext.Provider value={
            {
                transactions:state,
                addTransaction:addTransaction,
                delTransaction:delTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )

}




